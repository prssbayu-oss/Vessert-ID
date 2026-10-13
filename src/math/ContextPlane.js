/**
 * ContextPlane.js
 * VessertID Universal Social Engine
 *
 * Represents an infinite 2D contextual partition plane in social coordinate space.
 * Directly corresponds to Plane in Three.js.
 */

import { Address3 } from './Address3.js';

class ContextPlane {
  constructor(normal = new Address3(0, 1, 0), constant = 0) {
    this.normal = normal;
    this.constant = constant;
    this.isContextPlane = true;
  }

  set(normal, constant) {
    this.normal.copy(normal);
    this.constant = constant;
    return this;
  }

  clone() {
    return new ContextPlane(this.normal.clone(), this.constant);
  }

  copy(plane) {
    this.normal.copy(plane.normal);
    this.constant = plane.constant;
    return this;
  }

  distanceToAddress(addr) {
    const x = typeof addr.from === 'number' ? addr.from : 0;
    const y = typeof addr.to === 'number' ? addr.to : 0;
    const z = typeof addr.context === 'number' ? addr.context : 0;
    const nx = typeof this.normal.from === 'number' ? this.normal.from : 0;
    const ny = typeof this.normal.to === 'number' ? this.normal.to : 0;
    const nz = typeof this.normal.context === 'number' ? this.normal.context : 0;
    return (nx * x + ny * y + nz * z) + this.constant;
  }

  equals(plane) {
    return this.normal.equals(plane.normal) && this.constant === plane.constant;
  }
}

export { ContextPlane };
