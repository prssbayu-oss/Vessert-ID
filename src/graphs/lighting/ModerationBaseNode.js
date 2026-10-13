/**
 * ModerationBaseNode.js
 * VessertID Universal Social Engine
 */

class ModerationBaseNode {
  constructor(options = {}) {
    this.name = 'ModerationBaseNode';
    this.isModerationBaseNode = true;
    this.options = options;
  }
}

export { ModerationBaseNode };
export default ModerationBaseNode;
