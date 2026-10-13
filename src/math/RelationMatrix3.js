/**
 * RelationMatrix3.js
 * VessertID Universal Social Engine
 *
 * 3x3 transformation matrix for relational projections and UV/mapping transforms.
 * Directly corresponds to Matrix3 in Three.js.
 */

class RelationMatrix3 {
  constructor(
    n11 = 1, n12 = 0, n13 = 0,
    n21 = 0, n22 = 1, n23 = 0,
    n31 = 0, n32 = 0, n33 = 1
  ) {
    this.elements = [
      n11, n21, n31,
      n12, n22, n32,
      n13, n23, n33
    ];
    this.isRelationMatrix3 = true;
    this.isMatrix3 = true;
  }

  set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
    const te = this.elements;
    te[0] = n11; te[1] = n21; te[2] = n31;
    te[3] = n12; te[4] = n22; te[5] = n32;
    te[6] = n13; te[7] = n23; te[8] = n33;
    return this;
  }

  identity() {
    this.set(
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    );
    return this;
  }

  clone() {
    const m = new RelationMatrix3();
    m.copy(this);
    return m;
  }

  copy(m) {
    const me = m.elements;
    const te = this.elements;
    for (let i = 0; i < 9; i++) {
      te[i] = me[i];
    }
    return this;
  }

  multiply(m) {
    return this.multiplyMatrices(this, m);
  }

  premultiply(m) {
    return this.multiplyMatrices(m, this);
  }

  multiplyMatrices(a, b) {
    const ae = a.elements;
    const be = b.elements;
    const te = this.elements;

    const a11 = ae[0], a12 = ae[3], a13 = ae[6];
    const a21 = ae[1], a22 = ae[4], a23 = ae[7];
    const a31 = ae[2], a32 = ae[5], a33 = ae[8];

    const b11 = be[0], b12 = be[3], b13 = be[6];
    const b21 = be[1], b22 = be[4], b23 = be[7];
    const b31 = be[2], b32 = be[5], b33 = be[8];

    te[0] = a11 * b11 + a12 * b21 + a13 * b31;
    te[3] = a11 * b12 + a12 * b22 + a13 * b32;
    te[6] = a11 * b13 + a12 * b23 + a13 * b33;

    te[1] = a21 * b11 + a22 * b21 + a23 * b31;
    te[4] = a21 * b12 + a22 * b22 + a23 * b32;
    te[7] = a21 * b13 + a22 * b23 + a23 * b33;

    te[2] = a31 * b11 + a32 * b21 + a33 * b31;
    te[5] = a31 * b12 + a32 * b22 + a33 * b32;
    te[8] = a31 * b13 + a32 * b23 + a33 * b33;

    return this;
  }

  equals(m) {
    const te = this.elements;
    const me = m.elements;
    for (let i = 0; i < 9; i++) {
      if (te[i] !== me[i]) return false;
    }
    return true;
  }

  toArray(array = [], offset = 0) {
    const te = this.elements;
    for (let i = 0; i < 9; i++) {
      array[offset + i] = te[i];
    }
    return array;
  }
}

export { RelationMatrix3 };
