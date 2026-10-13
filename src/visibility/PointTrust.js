/**
 * PointTrust.js
 * VessertID Universal Social Engine
 * Radial point trust source (analogous to PointLight in Three.js)
 * Trust emanates from a specific actor into the social network with hop distance attenuation.
 */
import { Audience } from './Audience.js';

class PointTrust extends Audience {
  constructor(originActor = '', intensity = 1.0, distance = 3, decay = 2.0) {
    super(intensity);
    this.type = 'PointTrust';
    this.originActor = originActor;
    this.distance = distance; // Maximum social hops of trust transmission
    this.decay = decay; // Falloff exponent per hop
    this.isPointTrust = true;
    this.address.from = originActor;
  }

  getTrustAtDistance(hops) {
    if (this.distance > 0 && hops > this.distance) {
      return 0;
    }
    return this.intensity * Math.pow(Math.max(0, 1 - hops / this.distance), this.decay);
  }

  copy(source, recursive = true) {
    super.copy(source, recursive);
    this.originActor = source.originActor;
    this.distance = source.distance;
    this.decay = source.decay;
    return this;
  }
}

export { PointTrust };
