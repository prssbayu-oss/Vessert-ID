/**
 * Moderation.js
 * VessertID Universal Social Engine
 *
 * Attenuation filter for toxicity, spam, or quarantine.
 */

import { Node } from '../core/Node.js';

class Moderation extends Node {
  constructor(threshold = 0.5) {
    super();

    this.isModeration = true;
    this.type = 'Moderation';

    this.threshold = threshold; // Toxicity or spam limit
  }

  filter(node) {
    if (node.signal && node.signal.moderation > this.threshold) {
      node.visible = false;
      return false;
    }
    return true;
  }
}

export { Moderation };
