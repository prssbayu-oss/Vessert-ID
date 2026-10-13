/**
 * GremlinExporter.js
 * VessertID Universal Social Engine
 */

class GremlinExporter {
  constructor(options = {}) {
    this.name = 'GremlinExporter';
    this.isGremlinExporter = true;
    this.options = options;
  }
}

export { GremlinExporter };
export default GremlinExporter;
