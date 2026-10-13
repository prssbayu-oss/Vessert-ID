/**
 * FeedRankingPass.js
 * VessertID Universal Social Engine
 * Post-processing pass: ranks social candidate nodes according to algorithmic weights
 */
import { Pass } from './Pass.js';

class FeedRankingPass extends Pass {
  constructor(algorithm = null) {
    super();
    this.algorithm = algorithm;
    this.isFeedRankingPass = true;
  }

  render(context, view, readBuffer, writeBuffer) {
    const algo = this.algorithm || view;
    const candidates = (readBuffer.buffer || []).map((node) => {
      let score = 0;
      if (algo && algo.scoreNode) {
        score = algo.scoreNode(node);
      } else {
        score = node.address?.time || 0;
      }
      return { node, score };
    });

    candidates.sort((a, b) => b.score - a.score);
    writeBuffer.write(candidates.map(c => c.node));
  }
}

export { FeedRankingPass };
