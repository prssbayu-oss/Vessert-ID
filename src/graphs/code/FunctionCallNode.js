/**
 * FunctionCallNode.js
 * VessertID Universal Social Engine
 */

class FunctionCallNode {
  constructor(options = {}) {
    this.name = 'FunctionCallNode';
    this.isFunctionCallNode = true;
    this.options = options;
  }
}

export { FunctionCallNode };
export default FunctionCallNode;
