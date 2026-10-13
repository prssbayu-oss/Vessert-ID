/**
 * OrthographicView.js
 * VessertID Universal Social Engine
 * Parallel/egalitarian social viewpoint (analogous to OrthographicCamera in Three.js)
 * Objects maintain uniform scale regardless of distance (e.g. strict reverse-chronological timeline)
 */
import { View } from './View.js';

class OrthographicView extends View {
  constructor(viewerIdentity = '', left = -1, right = 1, top = 1, bottom = -1, near = 0.1, far = 2000) {
    super(viewerIdentity);
    this.type = 'OrthographicView';
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.near = near;
    this.far = far;
    this.isOrthographicView = true;

    this.updateProjectionMatrix();
  }

  updateProjectionMatrix() {
    const dx = 1.0 / (this.right - this.left);
    const dy = 1.0 / (this.top - this.bottom);
    const dz = 1.0 / (this.far - this.near);

    this.projectionMatrix.set(
      2 * dx, 0, 0, -(this.right + this.left) * dx,
      0, 2 * dy, 0, -(this.top + this.bottom) * dy,
      0, 0, -2 * dz, -(this.far + this.near) * dz,
      0, 0, 0, 1
    );

    return this;
  }

  scoreNode(node, currentTime = Date.now()) {
    if (!node.visible) return -1;
    if (this.layers && !this.layers.test(node.layers)) return -1;

    // Pure chronological weight (no algorithmic bias or distance magnification)
    return node.address?.time || 0;
  }

  copy(source, recursive = true) {
    super.copy(source, recursive);
    this.left = source.left;
    this.right = source.right;
    this.top = source.top;
    this.bottom = source.bottom;
    this.near = source.near;
    this.far = source.far;
    return this;
  }
}

export { OrthographicView };
