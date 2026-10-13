/**
 * Algorithm.js
 * VessertID Universal Social Engine
 *
 * An Algorithmic View transforms, filters, and ranks the social universe
 * according to engagement, affinity, recency, and moderation functions.
 */

import { View } from './View.js';
import { MathUtils } from '../math/MathUtils.js';

class Algorithm extends View {
  constructor(viewerIdentity = '', options = {}) {
    super(viewerIdentity);

    this.isAlgorithm = true;
    this.type = 'Algorithm';

    this.halfLifeHours = options.halfLifeHours || 24;
    this.minTrustThreshold = options.minTrustThreshold !== undefined ? options.minTrustThreshold : 0.2;
    this.weights = {
      recency: options.recencyWeight !== undefined ? options.recencyWeight : 0.4,
      affinity: options.affinityWeight !== undefined ? options.affinityWeight : 0.4,
      reactionCount: options.reactionWeight !== undefined ? options.reactionWeight : 0.2
    };
  }

  /**
   * Evaluates and scores a candidate node from this viewer's perspective.
   */
  scoreNode(node, currentTime = Date.now()) {
    if (!node.visible) return -1;
    if (!this.layers.test(node.layers)) return -1;

    // Temporal decay
    const dtHours = Math.max(0, (currentTime - node.address.time) / (1000 * 3600));
    const recencyScore = MathUtils.decay(1.0, this.halfLifeHours, dtHours);

    // Relational trust/affinity
    const affinityScore = node.relation.affinity;
    const trustScore = node.relation.trust;

    if (trustScore < this.minTrustThreshold) return -1;

    const totalScore =
      this.weights.recency * recencyScore +
      this.weights.affinity * affinityScore +
      this.weights.reactionCount * Math.min(1.0, (node.children.length / 50));

    return totalScore;
  }
}

export { Algorithm };
