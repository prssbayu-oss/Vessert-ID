/**
 * Context.js
 * VessertID Universal Social Engine
 *
 * Root container for social nodes in a specific domain, network, or server manifold.
 * Analogous to Scene in VessertID Engine
 */

import { Node } from '../core/Node.js';

class Context extends Node {
  constructor(name = 'default_context') {
    super('', '*', name, Date.now());

    this.isContext = true;
    this.type = 'Context';
    this.name = name;

    // Audience / lighting environment
    this.ambientAudience = null;
    this.audiences = [];
  }

  addAudience(audience) {
    this.audiences.push(audience);
    this.add(audience);
    return this;
  }

  removeAudience(audience) {
    const idx = this.audiences.indexOf(audience);
    if (idx !== -1) {
      this.audiences.splice(idx, 1);
    }
    this.remove(audience);
    return this;
  }
}

export { Context };
