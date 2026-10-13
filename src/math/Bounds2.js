/**
 * Bounds2.js
 * VessertID Universal Social Engine
 *
 * 2D bounding region in relational coordinate space.
 * Directly corresponds to Box2 in Three.js.
 */

import { Address2 } from './Address2.js';

class Bounds2 {
  constructor(min = new Address2(Infinity, Infinity), max = new Address2(-Infinity, -Infinity)) {
    this.min = min;
    this.max = max;
    this.isBounds2 = true;
  }

  set(min, max) {
    this.min.copy(min);
    this.max.copy(max);
    return this;
  }

  clone() {
    return new Bounds2(this.min.clone(), this.max.clone());
  }

  copy(box) {
    this.min.copy(box.min);
    this.max.copy(box.max);
    return this;
  }

  equals(box) {
    return this.min.equals(box.min) && this.max.equals(box.max);
  }
}

export { Bounds2 };
