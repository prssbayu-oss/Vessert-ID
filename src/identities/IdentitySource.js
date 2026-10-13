/**
 * IdentitySource.js
 * VessertID Universal Social Engine
 */

class IdentitySource {
  constructor(options = {}) {
    this.name = 'IdentitySource';
    this.isIdentitySource = true;
    this.options = options;
  }
}

export { IdentitySource };
export default IdentitySource;
