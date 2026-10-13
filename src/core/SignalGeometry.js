/**
 * SignalGeometry.js
 * VessertID Universal Social Engine
 *
 * Represents the social data schema / attribute container for an Actor or Signal.
 * Holds attributes such as payload, timestamps, coordinates, and embeddings.
 */

import { EventDispatcher } from './EventDispatcher.js';
import { MathUtils } from '../math/MathUtils.js';

class SignalGeometry extends EventDispatcher {
  constructor() {
    super();
    this.uuid = MathUtils.generateUUID();
    this.name = '';
    this.type = 'SignalGeometry';
    this.attributes = {};
    this.userData = {};
    this.isSignalGeometry = true;
  }

  setAttribute(name, attribute) {
    this.attributes[name] = attribute;
    return this;
  }

  getAttribute(name) {
    return this.attributes[name];
  }

  deleteAttribute(name) {
    delete this.attributes[name];
    return this;
  }

  hasAttribute(name) {
    return name in this.attributes;
  }

  clone() {
    const geometry = new SignalGeometry();
    for (const name in this.attributes) {
      geometry.setAttribute(name, this.attributes[name].clone());
    }
    return geometry;
  }

  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
}

export { SignalGeometry };
