/**
 * View.js
 * VessertID Universal Social Engine
 *
 * 
 * In VessertID: View = social viewpoint / perspective through which a context is perceived.
 */

import { Node } from '../core/Node.js';
import { WeightMatrix4 } from '../math/WeightMatrix4.js';

class View extends Node {
  constructor(viewerIdentity = '') {
    super();

    this.isView = true;
    this.type = 'View';

    this.viewer = viewerIdentity;
    this.projectionMatrix = new WeightMatrix4();
  }

  setViewer(identity) {
    this.viewer = identity;
    this.address.from = identity;
    return this;
  }
}

export { View };
