/**
 * CircleSchema.js
 * VessertID Universal Social Engine
 * Circular close-friends / trusted ring schema (analogous to CircleGeometry in Three.js)
 */
import { Schema } from './Schema.js';
import { Field } from './Field.js';

class CircleSchema extends Schema {
  constructor(maxMembers = 150) {
    super();
    this.type = 'CircleSchema';
    this.parameters = { maxMembers };
    this.isCircleSchema = true;

    this.setField('members', new Field('members', 'array', {
      required: true,
      max: maxMembers
    }));

    this.setField('ringLevel', new Field('ringLevel', 'number', {
      required: false,
      min: 1,
      max: 5,
      default: 1
    }));
  }

  copy(source) {
    super.copy(source);
    this.parameters = { ...source.parameters };
    return this;
  }
}

export { CircleSchema };
