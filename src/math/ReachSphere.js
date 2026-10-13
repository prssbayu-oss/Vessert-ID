/**
 * ReachSphere.js
 * VessertID Universal Social Engine
 *
 * Represents an analytical sphere of viral or conversational reach in social space.
 * Directly corresponds to Sphere in Three.js.
 */

import { Address3 } from './Address3.js';

class ReachSphere {
  constructor(center = new Address3(), radius = 100.0) {
    this.center = center;
    this.radius = radius;
    this.isReachSphere = true;
  }

  set(center, radius) {
    this.center.copy(center);
    this.radius = radius;
    return this;
  }

  clone() {
    return new ReachSphere(this.center.clone(), this.radius);
  }

  copy(s) {
    this.center.copy(s.center);
    this.radius = s.radius;
    return this;
  }

  containsAddress(addr) {
    // Euclidean distance in social coordinate projection
    const x = (typeof addr.from === 'number' ? addr.from : 0) - (typeof this.center.from === 'number' ? this.center.from : 0);
    const y = (typeof addr.to === 'number' ? addr.to : 0) - (typeof this.center.to === 'number' ? this.center.to : 0);
    const z = (typeof addr.context === 'number' ? addr.context : 0) - (typeof this.center.context === 'number' ? this.center.context : 0);
    return (x * x + y * y + z * z) <= (this.radius * this.radius);
  }

  equals(s) {
    return this.center.equals(s.center) && this.radius === s.radius;
  }
}

export { ReachSphere };
