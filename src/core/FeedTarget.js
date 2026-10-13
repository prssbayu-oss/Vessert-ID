/**
 * FeedTarget.js
 * VessertID Universal Social Engine
 *
 * Buffer target for aggregated/rendered social outputs
 * (e.g. ranked timeline feed, notification tray, filtered inbox stream).
 */

import { EventDispatcher } from './EventDispatcher.js';
import { MathUtils } from '../math/MathUtils.js';

class FeedTarget extends EventDispatcher {
  constructor(pageSize = 20, options = {}) {
    super();

    this.uuid = MathUtils.generateUUID();
    this.pageSize = pageSize;
    this.cursor = options.cursor || null;
    this.buffer = [];
    this.isFeedTarget = true;
  }

  write(items) {
    if (Array.isArray(items)) {
      this.buffer.push(...items);
    } else {
      this.buffer.push(items);
    }
    this.dispatchEvent({ type: 'write', count: this.buffer.length });
    return this;
  }

  clear() {
    this.buffer.length = 0;
    this.cursor = null;
    this.dispatchEvent({ type: 'clear' });
    return this;
  }

  getItems() {
    return this.buffer.slice(0, this.pageSize);
  }
}

export { FeedTarget };
