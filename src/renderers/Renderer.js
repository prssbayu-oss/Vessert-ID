/**
 * Renderer.js
 * VessertID Universal Social Engine
 *
 * 
 * In VessertID: Renderer projects a Context from a View viewpoint into a FeedTarget or API envelope.
 */

class Renderer {
  constructor() {
    this.isRenderer = true;
  }

  render(context, view, target) {
    throw new Error('Renderer.render: Must be implemented by subclass.');
  }
}

export { Renderer };
