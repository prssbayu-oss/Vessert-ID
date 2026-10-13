/**
 * FeedBasicSignal.js
 * VessertID Universal Social Engine
 *
 * A basic unshaded signal: raw text, unweighted status, or flat data.
 */

import { Signal } from './Signal.js';

class FeedBasicSignal extends Signal {
  constructor(parameters = {}) {
    super();

    this.isFeedBasicSignal = true;
    this.type = 'FeedBasicSignal';

    this.text = parameters.text || '';
    this.format = parameters.format || 'text/plain';
    this.weight = parameters.weight !== undefined ? parameters.weight : 1.0;

    if (parameters.content) {
      this.content = parameters.content;
    }
  }

  copy(source) {
    super.copy(source);
    this.text = source.text;
    this.weight = source.weight;
    return this;
  }
}

export { FeedBasicSignal };
