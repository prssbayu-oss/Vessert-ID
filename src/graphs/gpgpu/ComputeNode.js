/**
 * ComputeNode.js
 * VessertID Universal Social Engine
 */

class ComputeNode {
  constructor(options = {}) {
    this.name = 'ComputeNode';
    this.isComputeNode = true;
    this.options = options;
  }
}

export { ComputeNode };
export default ComputeNode;
