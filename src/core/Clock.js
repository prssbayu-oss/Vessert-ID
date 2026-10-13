/**
 * Clock.js
 * VessertID Universal Social Engine
 *
 * Tracks social system time, delta intervals, and logical causality ticks.
 */

class Clock {
  constructor(autoStart = true) {
    this.autoStart = autoStart;
    this.startTime = 0;
    this.oldTime = 0;
    this.elapsedTime = 0;
    this.running = false;
    this.logicalTick = 0; // Lamport causality counter
  }

  start() {
    this.startTime = now();
    this.oldTime = this.startTime;
    this.elapsedTime = 0;
    this.running = true;
    this.logicalTick = 0;
  }

  stop() {
    this.getElapsedTime();
    this.running = false;
    this.autoStart = false;
  }

  getElapsedTime() {
    this.getDelta();
    return this.elapsedTime;
  }

  getDelta() {
    let diff = 0;

    if (this.autoStart && !this.running) {
      this.start();
      return 0;
    }

    if (this.running) {
      const newTime = now();
      diff = (newTime - this.oldTime) / 1000;
      this.oldTime = newTime;
      this.elapsedTime += diff;
      this.logicalTick++;
    }

    return diff;
  }

  tick() {
    return ++this.logicalTick;
  }
}

function now() {
  return typeof performance !== 'undefined' ? performance.now() : Date.now();
}

export { Clock };
