/**
 * NodeError.js
 * VessertID Universal Social Engine
 */

class NodeError {
  constructor(options = {}) {
    this.name = 'NodeError';
    this.isNodeError = true;
    this.options = options;
  }
}

export { NodeError };
export default NodeError;
