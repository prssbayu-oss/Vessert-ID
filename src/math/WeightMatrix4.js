/**
 * WeightMatrix4.js
 * VessertID Universal Social Engine
 *
 * 4x4 transformation matrix for social coordinate projections.
 * Used to transform Addresses through contexts, algorithmic weights, and audience filters.
 */

class WeightMatrix4 {
  constructor() {
    this.elements = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ];
    this.isWeightMatrix4 = true;
  }

  set(
    n11, n12, n13, n14,
    n21, n22, n23, n24,
    n31, n32, n33, n34,
    n41, n42, n43, n44
  ) {
    const te = this.elements;
    te[0] = n11; te[4] = n12; te[8] = n13; te[12] = n14;
    te[1] = n21; te[5] = n22; te[9] = n23; te[13] = n24;
    te[2] = n31; te[6] = n32; te[10] = n33; te[14] = n34;
    te[3] = n41; te[7] = n42; te[11] = n43; te[15] = n44;
    return this;
  }

  identity() {
    this.set(
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    );
    return this;
  }

  clone() {
    return new WeightMatrix4().fromArray(this.elements);
  }

  copy(m) {
    const te = this.elements;
    const me = m.elements;
    for (let i = 0; i < 16; i++) {
      te[i] = me[i];
    }
    return this;
  }

  fromArray(array, offset = 0) {
    for (let i = 0; i < 16; i++) {
      this.elements[i] = array[i + offset];
    }
    return this;
  }

  toArray(array = [], offset = 0) {
    const te = this.elements;
    for (let i = 0; i < 16; i++) {
      array[offset + i] = te[i];
    }
    return array;
  }
}

export { WeightMatrix4 };
