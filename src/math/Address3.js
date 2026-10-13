/**
 * Address3.js
 * VessertID Universal Social Engine
 *
 * Represents a 3D contextual coordinate in social space:
 * (from, to, context)
 */

class Address3 {
  constructor(from = '', to = '', context = '') {
    this.from = from;
    this.to = to;
    this.context = context;
    this.isAddress3 = true;
  }

  set(from, to, context) {
    this.from = from;
    this.to = to;
    this.context = context;
    return this;
  }

  copy(v) {
    this.from = v.from;
    this.to = v.to;
    this.context = v.context;
    return this;
  }

  clone() {
    return new Address3(this.from, this.to, this.context);
  }

  equals(v) {
    return this.from === v.from && this.to === v.to && this.context === v.context;
  }

  isReflexive() {
    return Boolean(this.from && this.from === this.to);
  }

  isBroadcast() {
    const t = (this.to || '').toLowerCase();
    return t === '*' || t === '@public' || t === 'public' || t === 'all';
  }

  toTuple() {
    return [this.from, this.to, this.context];
  }

  toString() {
    return `[${this.from} -> ${this.to} @ ${this.context}]`;
  }
}

export { Address3 };
