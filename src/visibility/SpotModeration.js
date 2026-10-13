/**
 * SpotModeration.js
 * VessertID Universal Social Engine
 * Focused directional cone of moderation/scrutiny (analogous to SpotLight in Three.js)
 * Casts focused scrutiny on a specific sub-thread or user circle with a defined angle and penumbra.
 */
import { Audience } from './Audience.js';

class SpotModeration extends Audience {
  constructor(targetNode = null, intensity = 1.0, distance = 10, angle = Math.PI / 3, penumbra = 0.2, decay = 1.0) {
    super(intensity);
    this.type = 'SpotModeration';
    this.target = targetNode;
    this.distance = distance; // Maximum depth of thread traversal
    this.angle = angle; // Angular aperture of scrutiny (cone width)
    this.penumbra = penumbra; // Soft transition boundary (quarantine buffer)
    this.decay = decay;
    this.isSpotModeration = true;
  }

  isWithinCone(angleDifference, depth) {
    if (depth > this.distance) return false;
    return angleDifference <= this.angle;
  }

  copy(source, recursive = true) {
    super.copy(source, recursive);
    this.target = source.target;
    this.distance = source.distance;
    this.angle = source.angle;
    this.penumbra = source.penumbra;
    this.decay = source.decay;
    return this;
  }
}

export { SpotModeration };
