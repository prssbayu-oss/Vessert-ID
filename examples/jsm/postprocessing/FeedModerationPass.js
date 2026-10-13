/**
 * FeedModerationPass.js
 * VessertID Universal Social Engine
 * Post-processing pass: filters candidates by blocklist, keywords, and trust threshold
 */
import { Pass } from './Pass.js';

class FeedModerationPass extends Pass {
  constructor(options = {}) {
    super();
    this.blockList = new Set(options.blockList || []);
    this.minTrust = options.minTrust !== undefined ? options.minTrust : 0;
    this.blockedKeywords = (options.blockedKeywords || []).map(k => k.toLowerCase());
    this.isFeedModerationPass = true;
  }

  block(actorId) {
    this.blockList.add(actorId);
    return this;
  }

  unblock(actorId) {
    this.blockList.delete(actorId);
    return this;
  }

  render(context, view, readBuffer, writeBuffer) {
    const rawItems = readBuffer.buffer || [];
    const filtered = rawItems.filter((node) => {
      const author = node.author || node.address?.from || '';
      if (this.blockList.has(author)) {
        return false;
      }

      const text = (node.text || node.signal?.text || '').toLowerCase();
      for (const kw of this.blockedKeywords) {
        if (text.includes(kw)) {
          return false;
        }
      }

      return true;
    });

    writeBuffer.write(filtered);
  }
}

export { FeedModerationPass };
