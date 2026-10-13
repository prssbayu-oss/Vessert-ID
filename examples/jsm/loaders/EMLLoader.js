/**
 * EMLLoader.js
 * VessertID Universal Social Engine
 * Parses raw RFC 5322 .eml / mbox message text into VessertID Post Nodes
 */
import { Post } from '../../../src/objects/Post.js';

class EMLLoader {
  constructor(options = {}) {
    this.options = options;
    this.isEMLLoader = true;
  }

  parse(rawText) {
    if (!rawText || typeof rawText !== 'string') return null;

    const fromMatch = /^From:\s*(.+)$/im.exec(rawText);
    const dateMatch = /^Date:\s*(.+)$/im.exec(rawText);
    const subjectMatch = /^Subject:\s*(.+)$/im.exec(rawText);

    const author = fromMatch ? fromMatch[1].trim() : 'email:sender';
    const subject = subjectMatch ? subjectMatch[1].trim() : '';
    const time = dateMatch ? new Date(dateMatch[1].trim()).getTime() : Date.now();

    // Body starts after first double newline
    const bodyIndex = rawText.indexOf('\n\n');
    const body = bodyIndex !== -1 ? rawText.slice(bodyIndex + 2).trim() : rawText;

    const fullContent = subject ? `[${subject}]\n${body}` : body;
    return new Post(author, fullContent, 'email:inbox', time);
  }
}

export { EMLLoader };
