/**
 * Pass.js
 * VessertID Universal Social Engine
 * Base class for pipeline processing passes (analogous to Three.js Pass)
 */
class Pass {
  constructor() {
    this.enabled = true;
    this.needsUpdate = false;
    this.isPass = true;
  }

  render(context, view, readBuffer, writeBuffer) {
    throw new Error('Pass.render: Must be implemented by subclass.');
  }
}

export { Pass };
