/**
 * BlueskyPostParser.js
 * VessertID Universal Social Engine
 * Parses raw ATProto (com.atproto.repo / app.bsky.feed.post) records into VessertID Nodes
 */
import { Post } from '../../../../src/objects/Post.js';
import { Comment } from '../../../../src/objects/Comment.js';

class BlueskyPostParser {
  constructor(options = {}) {
    this.options = options;
    this.isBlueskyPostParser = true;
  }

  parse(record, authorDid = 'did:plc:alice') {
    if (!record) return null;
    const value = record.value || record;
    const text = value.text || '';
    const createdAt = value.createdAt ? new Date(value.createdAt).getTime() : Date.now();
    const replyParent = value.reply?.parent?.uri;

    if (replyParent) {
      return new Comment(authorDid, replyParent, text, 'atproto:thread', createdAt);
    } else {
      return new Post(authorDid, text, 'atproto:timeline', createdAt);
    }
  }
}

export { BlueskyPostParser };
