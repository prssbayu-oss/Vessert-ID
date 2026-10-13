/**
 * SphereSchema.js
 * VessertID Universal Social Engine
 * Omnidirectional public broadcast bubble schema (analogous to SphereGeometry in Three.js)
 */
import { Schema } from './Schema.js';
import { Field } from './Field.js';

class SphereSchema extends Schema {
  constructor(radiusHops = 3, maxReach = 100000) {
    super();
    this.type = 'SphereSchema';
    this.parameters = { radiusHops, maxReach };
    this.isSphereSchema = true;

    this.setField('hopDistance', new Field('hopDistance', 'number', {
      required: false,
      min: 0,
      max: radiusHops,
      default: 1
    }));

    this.setField('reachEstimate', new Field('reachEstimate', 'number', {
      required: false,
      min: 0,
      max: maxReach,
      default: 0
    }));
  }

  copy(source) {
    super.copy(source);
    this.parameters = { ...source.parameters };
    return this;
  }
}

export { SphereSchema };
