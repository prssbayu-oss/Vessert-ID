/**
 * Cache.js
 * VessertID Universal Social Engine
 * Global cache for social objects, avatars, and identity keys (analogous to Three.js Cache)
 */
class Cache {
  static enabled = true;
  static files = new Map();

  static add(key, file) {
    if (this.enabled) {
      this.files.set(key, file);
    }
  }

  static get(key) {
    if (this.enabled) {
      return this.files.get(key);
    }
    return undefined;
  }

  static remove(key) {
    this.files.delete(key);
  }

  static clear() {
    this.files.clear();
  }
}

export { Cache };
