/**
 * RSSLoader.js
 * VessertID Universal Social Engine
 * Parses raw RSS 2.0 / Atom XML feeds into VessertID Post Nodes (analogous to Three.js loaders)
 */
import { Post } from '../../../src/objects/Post.js';

class RSSLoader {
  constructor(options = {}) {
    this.options = options;
    this.isRSSLoader = true;
  }

  parse(xmlString) {
    if (!xmlString || typeof xmlString !== 'string') return [];
    const posts = [];
    
    // Pure regex-based XML extraction (zero external dependencies)
    const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
    let match;

    while ((match = itemRegex.exec(xmlString)) !== null) {
      const itemContent = match[1];
      const title = (/<title>([\s\S]*?)<\/title>/i.exec(itemContent) || [])[1] || '';
      const desc = (/<description>([\s\S]*?)<\/description>/i.exec(itemContent) || [])[1] || '';
      const author = (/<author>([\s\S]*?)<\/author>/i.exec(itemContent) || [])[1] || 'rss:author';
      const pubDateStr = (/<pubDate>([\s\S]*?)<\/pubDate>/i.exec(itemContent) || [])[1] || '';
      const time = pubDateStr ? new Date(pubDateStr).getTime() : Date.now();

      const text = `${title}\n${desc}`.trim();
      const post = new Post(author, text, 'rss:feed', time);
      posts.push(post);
    }

    return posts;
  }
}

export { RSSLoader };
