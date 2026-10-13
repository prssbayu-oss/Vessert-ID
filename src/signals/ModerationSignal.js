/**
 * ModerationSignal.js
 * VessertID Universal Social Engine
 */

class ModerationSignal {
  constructor(options = {}) {
    this.name = 'ModerationSignal';
    this.isModerationSignal = true;
    this.options = options;
  }
}

export { ModerationSignal };
export default ModerationSignal;
