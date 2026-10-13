/**
 * AmbientAudience.js
 * VessertID Universal Social Engine
 *
 * Illuminates all nodes equally in the public sphere without directional bias.
 */

import { Audience } from './Audience.js';

class AmbientAudience extends Audience {
  constructor(intensity = 1.0) {
    super(intensity);

    this.isAmbientAudience = true;
    this.type = 'AmbientAudience';

    // Enables layer 0 (public)
    this.layers.set(0);
  }
}

export { AmbientAudience };
