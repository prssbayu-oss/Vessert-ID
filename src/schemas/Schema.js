/**
 * Schema.js
 * VessertID Universal Social Engine
 * Foundational data structure container (analogous to BufferGeometry in Three.js)
 */
import { EventDispatcher } from '../core/EventDispatcher.js';
import { MathUtils } from '../math/MathUtils.js';
import { Field } from './Field.js';

let _schemaId = 0;

class Schema extends EventDispatcher {
  constructor() {
    super();
    this.id = _schemaId++;
    this.uuid = MathUtils.generateUUID();
    this.name = '';
    this.type = 'Schema';
    this.fields = new Map();
    this.version = 1;
    this.userData = {};
    this.isSchema = true;
  }

  setField(name, field) {
    if (field && field.isField) {
      this.fields.set(name, field);
    } else if (typeof field === 'object') {
      this.fields.set(name, new Field(name, field.type || 'string', field));
    }
    this.dispatchEvent({ type: 'change' });
    return this;
  }

  getField(name) {
    return this.fields.get(name);
  }

  deleteField(name) {
    const deleted = this.fields.delete(name);
    if (deleted) {
      this.dispatchEvent({ type: 'change' });
    }
    return deleted;
  }

  hasField(name) {
    return this.fields.has(name);
  }

  validate(record) {
    if (!record || typeof record !== 'object') return false;
    for (const [name, field] of this.fields.entries()) {
      const val = record[name];
      if (!field.validate(val)) {
        return false;
      }
    }
    return true;
  }

  copy(source) {
    this.name = source.name;
    this.fields.clear();
    for (const [name, field] of source.fields.entries()) {
      this.fields.set(name, field.clone());
    }
    this.userData = JSON.parse(JSON.stringify(source.userData));
    return this;
  }

  clone() {
    return new this.constructor().copy(this);
  }

  toJSON() {
    const fieldsObj = {};
    for (const [name, field] of this.fields.entries()) {
      fieldsObj[name] = {
        type: field.type,
        required: field.required,
        default: field.default,
        max: field.max,
        min: field.min
      };
    }
    return {
      metadata: {
        version: this.version,
        type: this.type,
        generator: 'VessertID.Schema'
      },
      uuid: this.uuid,
      name: this.name,
      fields: fieldsObj,
      userData: this.userData
    };
  }
}

export { Schema };
