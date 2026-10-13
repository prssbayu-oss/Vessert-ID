/**
 * FeedPhysicalSignal.js
 * VessertID Universal Social Engine
 * Physically-based social signal (analogous to MeshPhysicalMaterial in Three.js)
 * Models physical analogies of social spread:
 * - roughness: resistance/friction to resharing
 * - metalness: conductivity of social clout / celebrity reflection
 * - clearcoat: privacy veil / pseudonymous protective layer
 * - transmission: transparency of source metadata
 */
import { Signal } from './Signal.js';

class FeedPhysicalSignal extends Signal {
  constructor(parameters = {}) {
    super();
    this.type = 'FeedPhysicalSignal';
    this.text = parameters.text || '';
    this.roughness = parameters.roughness !== undefined ? parameters.roughness : 0.5; // Friction
    this.metalness = parameters.metalness !== undefined ? parameters.metalness : 0.0; // Clout conductivity
    this.clearcoat = parameters.clearcoat !== undefined ? parameters.clearcoat : 0.0; // Privacy veil
    this.transmission = parameters.transmission !== undefined ? parameters.transmission : 1.0; // Metadata openness
    this.ior = parameters.ior !== undefined ? parameters.ior : 1.5; // Index of context refraction
    this.isFeedPhysicalSignal = true;
  }

  copy(source) {
    super.copy(source);
    this.text = source.text;
    this.roughness = source.roughness;
    this.metalness = source.metalness;
    this.clearcoat = source.clearcoat;
    this.transmission = source.transmission;
    this.ior = source.ior;
    return this;
  }
}

export { FeedPhysicalSignal };
