/**
 * Bounds3.js
 * VessertID Universal Social Engine
 *
 * 3D bounding region in social-contextual coordinate space.
 * Directly corresponds to Box3 in Three.js.
 */

import { Address3 } from './Address3.js';

class Bounds3 {
  constructor(min = new Address3(Infinity, Infinity, Infinity), max = new Address3(-Infinity, -Infinity, -Infinity)) {
    this.min = min;
    this.max = max;
    this.isBounds3 = true;
  }

  set(min, max) {
    this.min.copy(min);
    this.max.copy(max);
    return this;
  }

  clone() {
    return new Bounds3(this.min.clone(), this.max.clone());
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

export { Bounds3 };
