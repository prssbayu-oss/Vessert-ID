/**
 * Post.js
 * VessertID Universal Social Engine
 *
 * Domain-level derivative: a public or scoped published item.
 * Constructed from base primitives: Actor + Address4 + Signal.
 */

import { Actor } from './Actor.js';
import { SignalGeometry } from '../core/SignalGeometry.js';
import { FeedStandardSignal } from '../signals/FeedStandardSignal.js';

class Post extends Actor {
  constructor(author = '', contentText = '', context = 'timeline', time = Date.now()) {
    const geometry = new SignalGeometry();
    const signal = new FeedStandardSignal({ text: contentText });

    super(geometry, signal);

    this.isPost = true;
    this.type = 'Post';

    this.address.set(author, '@public', context, time);
  }

  get author() {
    return this.address.from;
  }

  set author(value) {
    this.address.from = value;
  }

  get text() {
    return this.signal.text;
  }

  set text(value) {
    this.signal.text = value;
  }
}

export { Post };
