/**
 * DirectionalAudience.js
 * VessertID Universal Social Engine
 *
 * Targeted visibility directed toward specific recipient groups, circles, or handles.
 */

import { Audience } from './Audience.js';

class DirectionalAudience extends Audience {
  constructor(targetHandle = '', intensity = 1.0) {
    super(intensity);

    this.isDirectionalAudience = true;
    this.type = 'DirectionalAudience';

    this.target = targetHandle;
    this.address.to = targetHandle;
  }
}

export { DirectionalAudience };
