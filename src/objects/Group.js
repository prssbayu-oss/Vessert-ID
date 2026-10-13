/**
 * Group.js
 * VessertID Universal Social Engine
 *
 * Logical grouping node for social entities.
 */

import { Node } from '../core/Node.js';

class Group extends Node {
  constructor() {
    super();
    this.isGroup = true;
    this.type = 'Group';
  }
}

export { Group };
