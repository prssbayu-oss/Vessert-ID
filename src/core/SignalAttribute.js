/**
 * SignalAttribute.js
 * VessertID Universal Social Engine
 *
 * Holds typed array data or structured array data for social attributes
 * (e.g. weights, embeddings, interaction timestamps, reputation vectors).
 */

class SignalAttribute {
  constructor(array, itemSize = 1, normalized = false) {
    this.name = '';
    this.array = array;
    this.itemSize = itemSize;
    this.count = array !== undefined ? array.length / itemSize : 0;
    this.normalized = normalized;
    this.version = 0;
    this.isSignalAttribute = true;
  }

  set needsUpdate(value) {
    if (value === true) this.version++;
  }

  getX(index) {
    return this.array[index * this.itemSize];
  }

  setX(index, x) {
    this.array[index * this.itemSize] = x;
    return this;
  }

  getY(index) {
    return this.array[index * this.itemSize + 1];
  }

  setY(index, y) {
    this.array[index * this.itemSize + 1] = y;
    return this;
  }

  clone() {
    return new SignalAttribute(new this.array.constructor(this.array), this.itemSize, this.normalized);
  }
}

export { SignalAttribute };
