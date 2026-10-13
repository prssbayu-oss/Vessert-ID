/**
 * Actor.js
 * VessertID Universal Social Engine
 *
 * 
 * In VessertID: Actor = geometry (SignalGeometry) + signal (Signal)
 *
 * An Actor is a concrete social object positioned at an Address.
 */

import { Node } from '../core/Node.js';
import { SignalGeometry } from '../core/SignalGeometry.js';
import { FeedBasicSignal } from '../signals/FeedBasicSignal.js';

class Actor extends Node {
  constructor(geometry = new SignalGeometry(), signal = new FeedBasicSignal()) {
    super();

    this.isActor = true;
    this.type = 'Actor';

    this.geometry = geometry;
    this.signal = signal;
  }

  copy(source, recursive = true) {
    super.copy(source, recursive);

    if (source.geometry !== undefined) {
      this.geometry = source.geometry.clone();
    }

    if (source.signal !== undefined) {
      this.signal = source.signal.clone();
    }

    return this;
  }

  clone(recursive = true) {
    return new this.constructor(this.geometry, this.signal).copy(this, recursive);
  }
}

export { Actor };
