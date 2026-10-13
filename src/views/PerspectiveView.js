/**
 * PerspectiveView.js
 * VessertID Universal Social Engine
 * Perspective social viewpoint (analogous to PerspectiveCamera in Three.js)
 * Simulates human attention: near items are intimate and prominent, far items diminish with distance.
 */
import { View } from './View.js';
import { MathUtils } from '../math/MathUtils.js';

class PerspectiveView extends View {
  constructor(viewerIdentity = '', fov = 50, aspect = 1.0, near = 0.1, far = 2000) {
    super(viewerIdentity);
    this.type = 'PerspectiveView';
    this.fov = fov; // Attention field aperture (degrees)
    this.aspect = aspect; // Direct vs broadcast aspect ratio
    this.near = near; // Intimate threshold distance
    this.far = far; // Maximum horizon of awareness
    this.isPerspectiveView = true;

    this.updateProjectionMatrix();
  }

  updateProjectionMatrix() {
    const top = this.near * Math.tan(MathUtils.degToRad(0.5 * this.fov));
    const height = 2 * top;
    const width = this.aspect * height;
    const left = -0.5 * width;

    // Weight matrix encoding for social frustum
    this.projectionMatrix.set(
      (2 * this.near) / width, 0, 0, 0,
      0, (2 * this.near) / height, 0, 0,
      0, 0, -(this.far + this.near) / (this.far - this.near), -1,
      0, 0, -(2 * this.far * this.near) / (this.far - this.near), 0
    );

    return this;
  }

  scoreNode(node, currentTime = Date.now()) {
    if (!node.visible) return -1;
    if (this.layers && !this.layers.test(node.layers)) return -1;

    // Distance in time and relational closeness
    const timeDeltaHours = Math.max(0, (currentTime - (node.address?.time || currentTime)) / (1000 * 3600));
    const distanceFactor = 1 / (1 + (timeDeltaHours / (this.far / 24)));

    // Angular alignment with viewer affinity
    const isDirectContact = node.author === this.viewer || node.address?.to === this.viewer;
    const baseWeight = isDirectContact ? 1.0 : 0.6;

    return baseWeight * distanceFactor;
  }

  copy(source, recursive = true) {
    super.copy(source, recursive);
    this.fov = source.fov;
    this.aspect = source.aspect;
    this.near = source.near;
    this.far = source.far;
    return this;
  }
}

export { PerspectiveView };
