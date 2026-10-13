/**
 * NostrEventParser.js
 * VessertID Universal Social Engine
 * Parses Nostr NIP-01 events into VessertID Nodes
 */
import { Post } from '../../../../src/objects/Post.js';
import { Reaction } from '../../../../src/objects/Reaction.js';
import { Comment } from '../../../../src/objects/Comment.js';

class NostrEventParser {
  constructor(options = {}) {
    this.options = options;
    this.isNostrEventParser = true;
  }

  parse(event) {
    if (!event) return null;
    const author = event.pubkey ? `nostr:${event.pubkey}` : 'nostr:anon';
    const createdAt = (event.created_at || Math.floor(Date.now() / 1000)) * 1000;
    const content = event.content || '';

    // Kind 1: Short Text Note (Post / Reply)
    if (event.kind === 1) {
      const replyTag = (event.tags || []).find(t => t[0] === 'e');
      if (replyTag) {
        return new Comment(author, replyTag[1], content, 'nostr:thread', createdAt);
      }
      return new Post(author, content, 'nostr:global', createdAt);
    }

    // Kind 7: Reaction (Like / Emoji)
    if (event.kind === 7) {
      const targetTag = (event.tags || []).find(t => t[0] === 'e');
      const targetId = targetTag ? targetTag[1] : '';
      return new Reaction(author, targetId, content || 'like', 'nostr:reaction', createdAt);
    }

    return new Post(author, content, `nostr:kind_${event.kind}`, createdAt);
  }
}

export { NostrEventParser };
