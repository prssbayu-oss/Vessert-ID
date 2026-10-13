/**
 * Relation.js
 * VessertID Universal Social Engine
 *
 * Represents relational orientation / tie-strength dynamics between identities:
 * (trust, affinity, reciprocity, symmetry)
 */

class Relation {
  constructor(trust = 1.0, affinity = 0.0, reciprocity = 0.5, symmetry = 1.0) {
    this.trust = trust;
    this.affinity = affinity;
    this.reciprocity = reciprocity;
    this.symmetry = symmetry;
    this.isRelation = true;
  }

  set(trust, affinity, reciprocity, symmetry) {
    this.trust = trust;
    this.affinity = affinity;
    this.reciprocity = reciprocity;
    this.symmetry = symmetry;
    return this;
  }

  copy(r) {
    this.trust = r.trust;
    this.affinity = r.affinity;
    this.reciprocity = r.reciprocity;
    this.symmetry = r.symmetry;
    return this;
  }

  clone() {
    return new Relation(this.trust, this.affinity, this.reciprocity, this.symmetry);
  }

  identity() {
    this.trust = 1.0;
    this.affinity = 0.0;
    this.reciprocity = 1.0;
    this.symmetry = 1.0;
    return this;
  }

  multiply(r) {
    this.trust = Math.min(1.0, this.trust * r.trust);
    this.affinity = (this.affinity + r.affinity) / 2;
    this.reciprocity = (this.reciprocity + r.reciprocity) / 2;
    this.symmetry = Math.min(this.symmetry, r.symmetry);
    return this;
  }

  equals(r) {
    return (
      this.trust === r.trust &&
      this.affinity === r.affinity &&
      this.reciprocity === r.reciprocity &&
      this.symmetry === r.symmetry
    );
  }
}

export { Relation };
