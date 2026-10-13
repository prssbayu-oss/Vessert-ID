/**
 * StereoView.js
 * VessertID Universal Social Engine
 * Dual-perspective viewpoint (analogous to StereoCamera in Three.js)
 * Evaluates the same social manifold simultaneously from two distinct identities (e.g. echo chamber comparison)
 */
import { PerspectiveView } from './PerspectiveView.js';

class StereoView {
  constructor(viewerLeft = 'left_eye', viewerRight = 'right_eye') {
    this.type = 'StereoView';
    this.viewLeft = new PerspectiveView(viewerLeft);
    this.viewRight = new PerspectiveView(viewerRight);
    this.isStereoView = true;
  }

  scoreNode(node, currentTime = Date.now()) {
    const scoreL = this.viewLeft.scoreNode(node, currentTime);
    const scoreR = this.viewRight.scoreNode(node, currentTime);
    return {
      left: scoreL,
      right: scoreR,
      polarizationIndex: Math.abs(scoreL - scoreR)
    };
  }
}

export { StereoView };
