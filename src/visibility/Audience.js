/**
 * Audience.js
 * VessertID Universal Social Engine
 *
 * 
 * In VessertID: Audience = visibility / reach that illuminates social nodes.
 */

import { Node } from '../core/Node.js';

class Audience extends Node {
  constructor(intensity = 1.0) {
    super();

    this.isAudience = true;
    this.type = 'Audience';

    this.intensity = intensity; // Reach power / broadcast amplification
  }

  copy(source, recursive = true) {
    super.copy(source, recursive);
    this.intensity = source.intensity;
    return this;
  }
}

export { Audience };
