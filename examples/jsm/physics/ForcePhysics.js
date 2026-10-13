/**
 * ForcePhysics.js
 * VessertID Universal Social Engine
 * Force-directed spring-electrical layout for spatializing social node graphs
 */
class ForcePhysics {
  constructor(context = null, options = {}) {
    this.context = context;
    this.repulsionStrength = options.repulsionStrength || 250;
    this.attractionStrength = options.attractionStrength || 0.05;
    this.damping = options.damping || 0.85;
    this.positions = new Map(); // node -> { x, y, vx, vy }
    this.isForcePhysics = true;
  }

  setContext(context) {
    this.context = context;
    this.positions.clear();
    return this;
  }

  initNodes() {
    if (!this.context) return;
    this.context.traverse((node) => {
      if (!this.positions.has(node) && node !== this.context) {
        this.positions.set(node, {
          x: (Math.random() - 0.5) * 400,
          y: (Math.random() - 0.5) * 400,
          vx: 0,
          vy: 0
        });
      }
    });
  }

  step() {
    this.initNodes();
    const nodes = Array.from(this.positions.keys());

    // 1. Repulsion between all node pairs
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const p1 = this.positions.get(nodes[i]);
        const p2 = this.positions.get(nodes[j]);
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq) || 1;
        const force = this.repulsionStrength / Math.max(dist, 10);
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;

        p1.vx -= fx;
        p1.vy -= fy;
        p2.vx += fx;
        p2.vy += fy;
      }
    }

    // 2. Attraction along parent-child and reply links
    for (const node of nodes) {
      if (node.parent && this.positions.has(node.parent)) {
        const p1 = this.positions.get(node);
        const p2 = this.positions.get(node.parent);
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = dist * this.attractionStrength;

        p1.vx += (dx / dist) * force;
        p1.vy += (dy / dist) * force;
        p2.vx -= (dx / dist) * force;
        p2.vy -= (dy / dist) * force;
      }
    }

    // 3. Update coordinates with velocity damping
    for (const pos of this.positions.values()) {
      pos.x += pos.vx;
      pos.y += pos.vy;
      pos.vx *= this.damping;
      pos.vy *= this.damping;
    }
  }

  getPosition(node) {
    return this.positions.get(node) || { x: 0, y: 0 };
  }
}

export { ForcePhysics };
