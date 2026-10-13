/**
 * Tone.js
 * VessertID Universal Social Engine
 *
 * Represents emotional/affective or stylistic tone of a social signal:
 * - valence: positivity / negativity (-1.0 to +1.0)
 * - arousal: intensity / energy (0.0 to 1.0)
 * - dominance: authority / assertiveness (0.0 to 1.0)
 */

import { MathUtils } from './MathUtils.js';

class Tone {
  constructor(valence = 0, arousal = 0.5, dominance = 0.5) {
    this.valence = valence;
    this.arousal = arousal;
    this.dominance = dominance;
    this.isTone = true;
  }

  set(valence, arousal, dominance) {
    this.valence = valence;
    this.arousal = arousal;
    this.dominance = dominance;
    return this;
  }

  copy(t) {
    this.valence = t.valence;
    this.arousal = t.arousal;
    this.dominance = t.dominance;
    return this;
  }

  clone() {
    return new Tone(this.valence, this.arousal, this.dominance);
  }

  lerp(t, alpha) {
    this.valence += (t.valence - this.valence) * alpha;
    this.arousal += (t.arousal - this.arousal) * alpha;
    this.dominance += (t.dominance - this.dominance) * alpha;
    return this;
  }

  equals(t) {
    return (
      this.valence === t.valence &&
      this.arousal === t.arousal &&
      this.dominance === t.dominance
    );
  }

  toRGBString() {
    // Maps valence (-1 to +1) to Red->Green, arousal to saturation
    const r = Math.round(MathUtils.clamp((1 - this.valence) * 127.5, 0, 255));
    const g = Math.round(MathUtils.clamp((this.valence + 1) * 127.5, 0, 255));
    const b = Math.round(MathUtils.clamp(this.dominance * 255, 0, 255));
    return `rgb(${r}, ${g}, ${b})`;
  }
}

export { Tone };
