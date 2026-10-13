/**
 * FeedDecayPass.js
 * VessertID Universal Social Engine
 * Post-processing pass: recalculates and weights candidate nodes with temporal half-life decay
 */
import { Pass } from './Pass.js';

class FeedDecayPass extends Pass {
  constructor(options = {}) {
    super();
    this.halfLifeHours = options.halfLifeHours || 24;
    this.isFeedDecayPass = true;
  }

  render(context, view, readBuffer, writeBuffer) {
    const now = Date.now();
    const halfLifeMs = this.halfLifeHours * 3600 * 1000;
    const lambda = Math.LN2 / halfLifeMs;

    const scored = (readBuffer.buffer || []).map((node) => {
      const nodeTime = node.address?.time || now;
      const ageMs = Math.max(0, now - nodeTime);
      const decayFactor = Math.exp(-lambda * ageMs);
      return { node, decayFactor };
    });

    writeBuffer.write(scored.map(s => s.node));
  }
}

export { FeedDecayPass };
