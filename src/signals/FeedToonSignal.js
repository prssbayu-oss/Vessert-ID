/**
 * FeedToonSignal.js
 * VessertID Universal Social Engine
 * Quantized stepped social signal (analogous to MeshToonMaterial in Three.js)
 * Groups social scores into discrete quantization steps (e.g. Bronze, Silver, Gold badge tiers)
 */
import { Signal } from './Signal.js';

class FeedToonSignal extends Signal {
  constructor(parameters = {}) {
    super();
    this.type = 'FeedToonSignal';
    this.text = parameters.text || '';
    this.steps = parameters.steps || 3; // Discrete tiers (e.g. 1=Normal, 2=Trending, 3=Viral)
    this.thresholds = parameters.thresholds || [0.33, 0.66, 1.0];
    this.isFeedToonSignal = true;
  }

  getQuantizedTier(continuousScore) {
    for (let i = 0; i < this.thresholds.length; i++) {
      if (continuousScore <= this.thresholds[i]) {
        return i + 1;
      }
    }
    return this.steps;
  }

  copy(source) {
    super.copy(source);
    this.text = source.text;
    this.steps = source.steps;
    this.thresholds = [...source.thresholds];
    return this;
  }
}

export { FeedToonSignal };
