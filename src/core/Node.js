/**
 * Node.js
 * VessertID Universal Social Engine
 *
 * The foundational base primitive of VessertID:
 * 
 * In VessertID: Node has address (Address4), relation (Relation), tone (Tone), parent, children, layers.
 *
 * An Address represents the node's position in social space:
 * [dari, ke, konteks, waktu]
 */

import { EventDispatcher } from './EventDispatcher.js';
import { Layers } from './Layers.js';
import { Address4 } from '../math/Address4.js';
import { Relation } from '../math/Relation.js';
import { Tone } from '../math/Tone.js';
import { MathUtils } from '../math/MathUtils.js';

let _nodeId = 0;

class Node extends EventDispatcher {
  constructor(from = '', to = '', context = '', time = Date.now()) {
    super();

    this.isNode = true;
    this.id = _nodeId++;
    this.uuid = MathUtils.generateUUID();

    this.name = '';
    this.type = 'Node';

    this.parent = null;
    this.children = [];

    // The core position in social space: (from, to, context, time)
    this.address = new Address4(from, to, context, time);

    // Relational orientation & tie-strength
    this.relation = new Relation();

    // Emotional / stylistic tone
    this.tone = new Tone();

    // Prominence / Attention scale
    this.weight = 1.0;

    // Visibility bitmask layers
    this.layers = new Layers();

    this.visible = true;
    this.userData = {};
  }

  add(object) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) {
        this.add(arguments[i]);
      }
      return this;
    }

    if (object === this) {
      console.error("VessertID.Node.add: An object can't be added as a child of itself.", object);
      return this;
    }

    if (object && object.isNode) {
      if (object.parent !== null) {
        object.parent.remove(object);
      }

      object.parent = this;
      this.children.push(object);

      object.dispatchEvent({ type: 'added' });
      this.dispatchEvent({ type: 'childadded', child: object });
    }

    return this;
  }

  remove(object) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) {
        this.remove(arguments[i]);
      }
      return this;
    }

    const index = this.children.indexOf(object);

    if (index !== -1) {
      object.parent = null;
      this.children.splice(index, 1);

      object.dispatchEvent({ type: 'removed' });
      this.dispatchEvent({ type: 'childremoved', child: object });
    }

    return this;
  }

  removeFromParent() {
    if (this.parent !== null) {
      this.parent.remove(this);
    }
    return this;
  }

  clear() {
    for (let i = 0; i < this.children.length; i++) {
      const object = this.children[i];
      object.parent = null;
      object.dispatchEvent({ type: 'removed' });
    }
    this.children.length = 0;
    return this;
  }

  /**
   * Computes the compound hierarchical address in the social universe.
   * Traverses upwards to resolve inherited context paths.
   */
  getWorldAddress(target = new Address4()) {
    if (this.parent === null) {
      return target.copy(this.address);
    }

    const parentAddress = this.parent.getWorldAddress();
    const compoundContext = parentAddress.context
      ? `${parentAddress.context}/${this.address.context || ''}`
      : this.address.context;

    target.set(
      this.address.from || parentAddress.from,
      this.address.to || parentAddress.to,
      compoundContext,
      this.address.time
    );

    return target;
  }

  traverse(callback) {
    callback(this);
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].traverse(callback);
    }
  }

  traverseVisible(callback) {
    if (this.visible === false) return;
    callback(this);
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].traverseVisible(callback);
    }
  }

  traverseAncestors(callback) {
    const parent = this.parent;
    if (parent !== null) {
      callback(parent);
      parent.traverseAncestors(callback);
    }
  }

  getObjectById(id) {
    return this.getObjectByProperty('id', id);
  }

  getObjectByName(name) {
    return this.getObjectByProperty('name', name);
  }

  getObjectByProperty(name, value) {
    if (this[name] === value) return this;
    for (let i = 0, l = this.children.length; i < l; i++) {
      const child = this.children[i];
      const object = child.getObjectByProperty(name, value);
      if (object !== undefined) return object;
    }
    return undefined;
  }

  clone(recursive = true) {
    return new this.constructor().copy(this, recursive);
  }

  copy(source, recursive = true) {
    this.name = source.name;
    this.address.copy(source.address);
    this.relation.copy(source.relation);
    this.tone.copy(source.tone);
    this.weight = source.weight;
    this.visible = source.visible;
    this.layers.mask = source.layers.mask;
    this.userData = JSON.parse(JSON.stringify(source.userData));

    if (recursive === true) {
      this.clear();
      for (let i = 0; i < source.children.length; i++) {
        const child = source.children[i];
        this.add(child.clone());
      }
    }

    return this;
  }
}

export { Node };
