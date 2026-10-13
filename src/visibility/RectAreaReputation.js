/**
 * RectAreaReputation.js
 * VessertID Universal Social Engine
 * Planar surface reputation emitter (analogous to RectAreaLight in Three.js)
 * Represents institutional/organizational reputation emitted uniformly across a community surface.
 */
import { Audience } from './Audience.js';

class RectAreaReputation extends Audience {
  constructor(domainName = '', width = 10, height = 10, intensity = 1.0) {
    super(intensity);
    this.type = 'RectAreaReputation';
    this.domain = domainName;
    this.width = width; // Member footprint width
    this.height = height; // Content catalogue depth
    this.isRectAreaReputation = true;
  }

  getSurfaceArea() {
    return this.width * this.height;
  }

  copy(source, recursive = true) {
    super.copy(source, recursive);
    this.domain = source.domain;
    this.width = source.width;
    this.height = source.height;
    return this;
  }
}

export { RectAreaReputation };
