/**
 * Comment.js
 * VessertID Universal Social Engine
 *
 * Domain-level derivative: a reply to an existing node.
 * Positioned with address (author, targetPost, threadContext, time).
 */

import { Actor } from './Actor.js';
import { SignalGeometry } from '../core/SignalGeometry.js';
import { FeedBasicSignal } from '../signals/FeedBasicSignal.js';

class Comment extends Actor {
  constructor(author = '', targetPostId = '', contentText = '', context = 'thread', time = Date.now()) {
    const geometry = new SignalGeometry();
    const signal = new FeedBasicSignal({ text: contentText });

    super(geometry, signal);

    this.isComment = true;
    this.type = 'Comment';

    this.address.set(author, targetPostId, context, time);
  }
}

export { Comment };
