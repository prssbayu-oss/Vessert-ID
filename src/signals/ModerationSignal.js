/**
 * ModerationSignal.js
 * VessertID Universal Social Engine
 * Specialized signal carrying moderation tags and policy filters (analogous to ShaderMaterial / Shadow Material)
 */
import { Signal } from './Signal.js';

class ModerationSignal extends Signal {
  constructor(parameters = {}) {
    super();
    this.type = 'ModerationSignal';
    this.toxicityScore = parameters.toxicityScore !== undefined ? parameters.toxicityScore : 0.0;
    this.quarantined = parameters.quarantined !== undefined ? parameters.quarantined : false;
    this.strikeCount = parameters.strikeCount || 0;
    this.tags = parameters.tags || [];
    this.isModerationSignal = true;
  }

  isCompliant(maxAllowedToxicity = 0.5) {
    if (this.quarantined) return false;
    if (this.strikeCount >= 3) return false;
    return this.toxicityScore <= maxAllowedToxicity;
  }

  copy(source) {
    super.copy(source);
    this.toxicityScore = source.toxicityScore;
    this.quarantined = source.quarantined;
    this.strikeCount = source.strikeCount;
    this.tags = [...source.tags];
    return this;
  }
}

export { ModerationSignal };
