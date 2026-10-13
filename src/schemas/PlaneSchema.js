/**
 * PlaneSchema.js
 * VessertID Universal Social Engine
 * Planar feed/timeline stream schema (analogous to PlaneGeometry in Three.js)
 */
import { Schema } from './Schema.js';
import { Field } from './Field.js';

class PlaneSchema extends Schema {
  constructor(columnCount = 1, pageSize = 20) {
    super();
    this.type = 'PlaneSchema';
    this.parameters = {
      columnCount,
      pageSize
    };
    this.isPlaneSchema = true;

    this.setField('column', new Field('column', 'number', {
      required: false,
      min: 0,
      max: columnCount - 1,
      default: 0
    }));

    this.setField('positionInStream', new Field('positionInStream', 'number', {
      required: false,
      min: 0,
      default: 0
    }));
  }

  copy(source) {
    super.copy(source);
    this.parameters = { ...source.parameters };
    return this;
  }
}

export { PlaneSchema };
