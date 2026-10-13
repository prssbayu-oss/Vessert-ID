/**
 * Address2.js
 * VessertID Universal Social Engine
 *
 * Represents a 2D relational coordinate in social space:
 * (from, to) -> A direct directed edge or relational dyad.
 */

class Address2 {
  constructor(from = '', to = '') {
    this.from = from;
    this.to = to;
    this.isAddress2 = true;
  }

  set(from, to) {
    this.from = from;
    this.to = to;
    return this;
  }

  copy(v) {
    this.from = v.from;
    this.to = v.to;
    return this;
  }

  clone() {
    return new Address2(this.from, this.to);
  }

  equals(v) {
    return this.from === v.from && this.to === v.to;
  }

  isReflexive() {
    return Boolean(this.from && this.from === this.to);
  }

  toTuple() {
    return [this.from, this.to];
  }

  toString() {
    return `[${this.from} -> ${this.to}]`;
  }
}

export { Address2 };
