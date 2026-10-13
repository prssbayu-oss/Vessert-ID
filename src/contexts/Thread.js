/**
 * Thread.js
 * VessertID Universal Social Engine
 *
 * A conversational thread context (hierarchical linear/branching discussions).
 */

import { Context } from './Context.js';

class Thread extends Context {
  constructor(threadId = 'root_thread', rootAuthor = '') {
    super(`thread:${threadId}`);

    this.isThread = true;
    this.type = 'Thread';
    this.threadId = threadId;
    this.rootAuthor = rootAuthor;
    this.address.from = rootAuthor;
    this.address.to = '*';
    this.address.context = `thread:${threadId}`;
  }
}

export { Thread };
