/**
 * TimelineControls.js
 * VessertID Universal Social Engine
 * Interactive chronological navigator for algorithmic views
 */
class TimelineControls {
  constructor(algorithmView = null) {
    this.algorithmView = algorithmView;
    this.currentTime = Date.now();
    this.windowMs = 24 * 3600 * 1000; // default 24h
    this.isTimelineControls = true;
  }

  setTime(timestamp) {
    this.currentTime = timestamp;
    if (this.algorithmView) {
      this.algorithmView.currentTime = timestamp;
    }
    return this;
  }

  setWindow(hours) {
    this.windowMs = hours * 3600 * 1000;
    return this;
  }

  isInWindow(nodeTime) {
    const delta = Math.abs(this.currentTime - nodeTime);
    return delta <= this.windowMs;
  }
}

export { TimelineControls };
