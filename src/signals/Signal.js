/**
 * Signal.js
 * VessertID Universal Social Engine
 *
 * Base class for all social signals in VessertID.
 * Defines payload format, privacy encoding, moderation parameters, and rendering rules.
 */

import { EventDispatcher } from '../core/EventDispatcher.js';
import { MathUtils } from '../math/MathUtils.js';

let _signalId = 0;

class Signal extends EventDispatcher {
  constructor() {
    super();

    this.isSignal = true;
    this.id = _signalId++;
    this.uuid = MathUtils.generateUUID();

    this.name = '';
    this.type = 'Signal';

    this.format = 'text/plain';
    this.content = null;

    this.opacity = 1.0; // Decay / Attention factor
    this.transparent = false; // Is metadata redacted or encrypted?

    this.version = 0;
    this.userData = {};
  }

  set needsUpdate(value) {
    if (value === true) this.version++;
  }

  clone() {
    return new this.constructor().copy(this);
  }

  copy(source) {
    this.name = source.name;
    this.format = source.format;
    this.content = source.content;
    this.opacity = source.opacity;
    this.transparent = source.transparent;
    this.userData = JSON.parse(JSON.stringify(source.userData));
    return this;
  }

  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
}

export { Signal };
