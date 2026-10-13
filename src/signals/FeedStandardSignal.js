/**
 * FeedStandardSignal.js
 * VessertID Universal Social Engine
 *
 * A standard physically-inspired social signal:
 * - trustFactor: credibility resistance
 * - affinity: relationship pull
 * - moderation: filter threshold
 * - decayHalfLife: temporal attention half-life
 */

import { Signal } from './Signal.js';

class FeedStandardSignal extends Signal {
  constructor(parameters = {}) {
    super();

    this.isFeedStandardSignal = true;
    this.type = 'FeedStandardSignal';

    this.text = parameters.text || '';
    this.trustFactor = parameters.trustFactor !== undefined ? parameters.trustFactor : 0.8;
    this.affinity = parameters.affinity !== undefined ? parameters.affinity : 0.5;
    this.moderation = parameters.moderation !== undefined ? parameters.moderation : 0.0;
    this.decayHalfLife = parameters.decayHalfLife !== undefined ? parameters.decayHalfLife : 24; // 24 hours

    if (parameters.content) {
      this.content = parameters.content;
    }
  }

  copy(source) {
    super.copy(source);
    this.text = source.text;
    this.trustFactor = source.trustFactor;
    this.affinity = source.affinity;
    this.moderation = source.moderation;
    this.decayHalfLife = source.decayHalfLife;
    return this;
  }
}

export { FeedStandardSignal };
