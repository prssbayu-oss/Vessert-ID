/**
 * Layers.js
 * VessertID Universal Social Engine
 *
 * Bitmask layer control for visibility, audience partitioning, and privacy.
 * In VessertID:
 * Layer 0: Public
 * Layer 1: Direct (1:1)
 * Layer 2: Mutuals / Circles
 * Layer 3: Moderated / Quarantined
 * Layer 4: Algorithmic Recommendation
 * Layer 5: Ephemeral
 */

class Layers {
  constructor() {
    this.mask = 1 | 0; // Default: Layer 0 (Public) enabled
  }

  set(channel) {
    this.mask = ((1 << channel) | 0) >>> 0;
  }

  enable(channel) {
    this.mask |= (1 << channel) | 0;
  }

  enableAll() {
    this.mask = 0xffffffff | 0;
  }

  toggle(channel) {
    this.mask ^= (1 << channel) | 0;
  }

  disable(channel) {
    this.mask &= ~((1 << channel) | 0);
  }

  disableAll() {
    this.mask = 0;
  }

  test(layers) {
    return (this.mask & layers.mask) !== 0;
  }

  isEnabled(channel) {
    return (this.mask & ((1 << channel) | 0)) !== 0;
  }
}

export { Layers };
