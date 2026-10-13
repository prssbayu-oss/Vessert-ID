/**
 * Address4.js
 * VessertID Universal Social Engine
 *
 * The canonical 4-manifold primitive of VessertID:
 * Address4 = (from, to, context, time)
 * [dari, ke, konteks, waktu]
 *
 * Analogous to Vector3/4 in physical space:
 * - from: origin actor / author / subject
 * - to: recipient / destination / audience / board
 * - context: conversational thread / channel / domain manifold
 * - time: temporal coordinate (monotonic or timestamp)
 */

class Address4 {
  constructor(from = '', to = '', context = '', time = Date.now()) {
    // Dukung pemanggilan dengan object { dari, ke, konteks, waktu }
    if (typeof from === 'object' && from !== null && !Array.isArray(from)) {
      const opts = from;
      this.from = opts.dari || opts.from || '';
      this.to = opts.ke || opts.to || '';
      this.context = opts.konteks || opts.context || '';
      this.time = typeof (opts.waktu || opts.time) === 'number' ? (opts.waktu || opts.time) : Date.now();
    } else {
      this.from = from;
      this.to = to;
      this.context = context;
      this.time = typeof time === 'number' ? time : Date.now();
    }
    this.isAddress4 = true;
    this.isAddress = true;
  }

  // Getters & Setters untuk konsep asli VessertID
  get dari() { return this.from; }
  set dari(v) { this.from = v; }

  get ke() { return this.to; }
  set ke(v) { this.to = v; }

  get konteks() { return this.context; }
  set konteks(v) { this.context = v; }

  get waktu() { return this.time; }
  set waktu(v) { this.time = v; }

  set(from, to, context, time = Date.now()) {
    this.from = from;
    this.to = to;
    this.context = context;
    this.time = time;
    return this;
  }

  copy(v) {
    this.from = v.from;
    this.to = v.to;
    this.context = v.context;
    this.time = v.time;
    return this;
  }

  clone() {
    return new Address4(this.from, this.to, this.context, this.time);
  }

  equals(v) {
    return (
      this.from === v.from &&
      this.to === v.to &&
      this.context === v.context &&
      this.time === v.time
    );
  }

  /**
   * Topological co-contextual check (sharing context and target audience)
   */
  isCoContextual(v) {
    return this.context === v.context && this.to === v.to;
  }

  isReflexive() {
    return Boolean(this.from && this.from === this.to);
  }

  isBroadcast() {
    const t = (this.to || '').toLowerCase();
    return t === '*' || t === '@public' || t === 'public' || t === 'all';
  }

  /**
   * Projects this address into a sub-context or parent-context manifold.
   * Analogous to vector projection / transform.
   */
  project(subContext, delimiter = '/') {
    const nextContext = this.context ? `${this.context}${delimiter}${subContext}` : subContext;
    return new Address4(this.from, this.to, nextContext, this.time);
  }

  /**
   * Computes relational topology distance:
   * 0.0: identical
   * 0.5: same from, to, context (only temporal delta)
   * 1.0: co-contextual and same destination
   * 2.0: same context, different destination
   * 3.0: same actor, different context
   * 4.0: disjoint manifold
   */
  distanceTo(v) {
    if (this.equals(v)) return 0;
    const sameFrom = this.from === v.from;
    const sameTo = this.to === v.to;
    const sameContext = this.context === v.context;

    if (sameContext && sameTo && sameFrom) return 0.5;
    if (sameContext && sameTo) return 1.0;
    if (sameContext) return 2.0;
    if (sameFrom) return 3.0;
    return 4.0;
  }

  toTuple() {
    return [this.from, this.to, this.context, this.time];
  }

  toURI() {
    return `vessert://${encodeURIComponent(this.from)}->${encodeURIComponent(this.to)}@${encodeURIComponent(this.context)}?t=${this.time}`;
  }

  toString() {
    return `[${this.from} -> ${this.to} @ ${this.context} | t:${this.time}]`;
  }

  static from(data) {
    if (Array.isArray(data)) {
      return new Address4(data[0], data[1], data[2], data[3]);
    }
    if (data && typeof data === 'object') {
      return new Address4(data.from, data.to, data.context, data.time);
    }
    return new Address4();
  }
}

export { Address4 };
