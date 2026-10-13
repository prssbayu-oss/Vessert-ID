/**
 * Field.js
 * VessertID Universal Social Engine
 * Attribute field descriptor inside a Schema (analogous to BufferAttribute in Three.js)
 */
import { MathUtils } from '../math/MathUtils.js';

class Field {
  constructor(name = '', type = 'string', options = {}) {
    this.name = name;
    this.type = type; // 'string', 'number', 'boolean', 'array', 'object', 'address'
    this.required = options.required !== undefined ? options.required : false;
    this.default = options.default !== undefined ? options.default : null;
    this.validator = options.validator || null;
    this.max = options.max !== undefined ? options.max : null;
    this.min = options.min !== undefined ? options.min : null;
    this.isField = true;
  }

  validate(value) {
    if (this.required && (value === undefined || value === null)) {
      return false;
    }
    if (value === undefined || value === null) {
      return true;
    }
    if (this.type === 'string' && typeof value !== 'string') return false;
    if (this.type === 'number' && typeof value !== 'number') return false;
    if (this.type === 'boolean' && typeof value !== 'boolean') return false;
    if (this.type === 'array' && !Array.isArray(value)) return false;

    if (this.max !== null) {
      if (typeof value === 'string' && value.length > this.max) return false;
      if (typeof value === 'number' && value > this.max) return false;
    }
    if (this.min !== null) {
      if (typeof value === 'string' && value.length < this.min) return false;
      if (typeof value === 'number' && value < this.min) return false;
    }

    if (this.validator && typeof this.validator === 'function') {
      return Boolean(this.validator(value));
    }
    return true;
  }

  clone() {
    return new Field(this.name, this.type, {
      required: this.required,
      default: this.default,
      validator: this.validator,
      max: this.max,
      min: this.min
    });
  }
}

export { Field };
