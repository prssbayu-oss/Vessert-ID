/**
 * BoxSchema.js
 * VessertID Universal Social Engine
 * Bounded 3D constraint schema (analogous to BoxGeometry in Three.js)
 * Limits: text length (width), attachment count (height), reply thread depth (depth)
 */
import { Schema } from './Schema.js';
import { Field } from './Field.js';

class BoxSchema extends Schema {
  constructor(maxTextLength = 280, maxAttachments = 4, maxThreadDepth = 10) {
    super();
    this.type = 'BoxSchema';
    this.parameters = {
      maxTextLength,
      maxAttachments,
      maxThreadDepth
    };
    this.isBoxSchema = true;

    this.setField('text', new Field('text', 'string', {
      required: true,
      max: maxTextLength
    }));

    this.setField('attachments', new Field('attachments', 'array', {
      required: false,
      max: maxAttachments
    }));

    this.setField('threadDepth', new Field('threadDepth', 'number', {
      required: false,
      max: maxThreadDepth,
      default: 0
    }));
  }

  copy(source) {
    super.copy(source);
    this.parameters = { ...source.parameters };
    return this;
  }
}

export { BoxSchema };
