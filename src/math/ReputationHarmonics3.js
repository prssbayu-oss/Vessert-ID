/**
 * ReputationHarmonics3.js
 * VessertID Universal Social Engine
 *
 * 9-coefficient spherical harmonic representation of reputation / authority distribution.
 * Directly corresponds to SphericalHarmonics3 in Three.js.
 */

import { Address3 } from './Address3.js';

class ReputationHarmonics3 {
  constructor() {
    this.coefficients = [];
    for (let i = 0; i < 9; i++) {
      this.coefficients.push(new Address3());
    }
    this.isReputationHarmonics3 = true;
  }

  set(coefficients) {
    for (let i = 0; i < 9; i++) {
      this.coefficients[i].copy(coefficients[i]);
    }
    return this;
  }

  zero() {
    for (let i = 0; i < 9; i++) {
      this.coefficients[i].set(0, 0, 0);
    }
    return this;
  }

  clone() {
    const r = new ReputationHarmonics3();
    r.copy(this);
    return r;
  }

  copy(sh) {
    for (let i = 0; i < 9; i++) {
      this.coefficients[i].copy(sh.coefficients[i]);
    }
    return this;
  }

  equals(sh) {
    for (let i = 0; i < 9; i++) {
      if (!this.coefficients[i].equals(sh.coefficients[i])) return false;
    }
    return true;
  }
}

export { ReputationHarmonics3 };
