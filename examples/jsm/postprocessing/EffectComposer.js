/**
 * EffectComposer.js
 * VessertID Universal Social Engine
 * Manages multi-pass execution pipeline for social feeds and graphs (analogous to Three.js EffectComposer)
 */
import { FeedTarget } from '../../../src/core/FeedTarget.js';

class EffectComposer {
  constructor(renderer = null, context = null, view = null) {
    this.renderer = renderer;
    this.context = context;
    this.view = view;
    this.passes = [];
    this.readTarget = new FeedTarget();
    this.writeTarget = new FeedTarget();
    this.isEffectComposer = true;
  }

  addPass(pass) {
    this.passes.push(pass);
    return this;
  }

  insertPass(pass, index) {
    this.passes.splice(index, 0, pass);
    return this;
  }

  removePass(pass) {
    const idx = this.passes.indexOf(pass);
    if (idx !== -1) {
      this.passes.splice(idx, 1);
    }
    return this;
  }

  render() {
    this.readTarget.clear();
    this.writeTarget.clear();

    // Pass 0: initial evaluation via renderer into readTarget
    if (this.renderer && this.context && this.view) {
      this.renderer.render(this.context, this.view, this.readTarget);
    }

    let currentInput = this.readTarget;
    let currentOutput = this.writeTarget;

    for (const pass of this.passes) {
      if (pass.enabled) {
        currentOutput.clear();
        pass.render(this.context, this.view, currentInput, currentOutput);
        // Swap read/write buffers
        const temp = currentInput;
        currentInput = currentOutput;
        currentOutput = temp;
      }
    }

    return currentInput;
  }
}

export { EffectComposer };
