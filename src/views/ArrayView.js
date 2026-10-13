/**
 * ArrayView.js
 * VessertID Universal Social Engine
 * Composite multi-viewpoint array (analogous to ArrayCamera in Three.js)
 * Evaluates candidates across an array of views and aggregates their scores
 */
class ArrayView {
  constructor(views = []) {
    this.type = 'ArrayView';
    this.views = views;
    this.isArrayView = true;
  }

  addView(view) {
    this.views.push(view);
    return this;
  }

  scoreNode(node, currentTime = Date.now()) {
    if (this.views.length === 0) return 0;
    let total = 0;
    let valid = 0;
    for (const v of this.views) {
      const s = v.scoreNode ? v.scoreNode(node, currentTime) : 0;
      if (s >= 0) {
        total += s;
        valid++;
      }
    }
    return valid > 0 ? total / valid : -1;
  }
}

export { ArrayView };
