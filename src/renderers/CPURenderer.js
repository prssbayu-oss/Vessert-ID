/**
 * CPURenderer.js
 * VessertID Universal Social Engine
 *
 * In-memory social space evaluator.
 * Traverses a Context (Scene), applies View visibility and Algorithm scoring,
 * and renders ranked social nodes into a FeedTarget.
 */

import { Renderer } from './Renderer.js';
import { FeedTarget } from '../core/FeedTarget.js';

class CPURenderer extends Renderer {
  constructor() {
    super();
    this.isCPURenderer = true;
  }

  render(context, view, target = new FeedTarget()) {
    if (!context || !context.isNode) {
      console.error('CPURenderer.render: Invalid context provided.');
      return target;
    }

    target.clear();
    const candidateNodes = [];

    // Traverse context tree
    context.traverseVisible((node) => {
      // Collect leaf or content nodes (Actors/Posts/Comments)
      if (node !== context && (node.isActor || node.isPost || node.isComment)) {
        if (view.layers ? view.layers.test(node.layers) : true) {
          let score = 0;
          if (view.scoreNode) {
            score = view.scoreNode(node);
          } else {
            // Default: recency
            score = node.address.time;
          }

          if (score >= 0) {
            candidateNodes.push({ node, score });
          }
        }
      }
    });

    // Rank candidates by score descending
    candidateNodes.sort((a, b) => b.score - a.score);

    target.write(candidateNodes.map((item) => item.node));
    return target;
  }
}

export { CPURenderer };
