/**
 * TwitterArchiveLoader.js
 * VessertID Universal Social Engine
 * Parses raw Twitter export / archive tweet JSON into VessertID Post Nodes
 */
import { Post } from '../../../src/objects/Post.js';

class TwitterArchiveLoader {
  constructor(options = {}) {
    this.options = options;
    this.isTwitterArchiveLoader = true;
  }

  parse(json) {
    if (!json) return null;
    const data = typeof json === 'string' ? JSON.parse(json) : json;
    const tweet = data.tweet || data;
    const author = tweet.user?.screen_name ? `@${tweet.user.screen_name}` : 'twitter:author';
    const text = tweet.full_text || tweet.text || '';
    const time = tweet.created_at ? new Date(tweet.created_at).getTime() : Date.now();

    const post = new Post(author, text, 'twitter:timeline', time);
    return post;
  }
}

export { TwitterArchiveLoader };
