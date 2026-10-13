/**
 * ActivityPubLoader.js
 * VessertID Universal Social Engine
 * Parses W3C ActivityStreams 2.0 / ActivityPub objects into VessertID Nodes (analogous to GLTFLoader in Three.js)
 */
import { Post } from '../../../src/objects/Post.js';
import { Comment } from '../../../src/objects/Comment.js';

class ActivityPubLoader {
  constructor(options = {}) {
    this.options = options;
    this.isActivityPubLoader = true;
  }

  parse(json) {
    if (!json) return null;
    const activity = typeof json === 'string' ? JSON.parse(json) : json;
    
    // Support Create(Note) or standalone Note
    const object = activity.object || activity;
    const author = activity.actor || object.attributedTo || 'https://unknown.social/actor';
    const text = (object.content || '').replace(/<[^>]+>/g, ''); // strip HTML tags
    const published = object.published ? new Date(object.published).getTime() : Date.now();
    const inReplyTo = object.inReplyTo;

    if (inReplyTo) {
      return new Comment(author, inReplyTo, text, 'activitypub:thread', published);
    } else {
      return new Post(author, text, 'activitypub:public', published);
    }
  }
}

export { ActivityPubLoader };
