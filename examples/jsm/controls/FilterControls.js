/**
 * FilterControls.js
 * VessertID Universal Social Engine
 * Interactive filter controller for masking layers, authors, and keywords
 */
class FilterControls {
  constructor(algorithmView = null) {
    this.algorithmView = algorithmView;
    this.keywordFilter = '';
    this.authorFilter = '';
    this.isFilterControls = true;
  }

  setKeyword(kw) {
    this.keywordFilter = (kw || '').toLowerCase();
    return this;
  }

  setAuthor(author) {
    this.authorFilter = (author || '').toLowerCase();
    return this;
  }

  test(node) {
    if (this.authorFilter) {
      const author = (node.author || node.address?.from || '').toLowerCase();
      if (!author.includes(this.authorFilter)) {
        return false;
      }
    }

    if (this.keywordFilter) {
      const text = (node.text || node.signal?.text || '').toLowerCase();
      if (!text.includes(this.keywordFilter)) {
        return false;
      }
    }

    return true;
  }
}

export { FilterControls };
