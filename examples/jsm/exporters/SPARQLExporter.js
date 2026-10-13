/**
 * SPARQLExporter.js
 * VessertID Universal Social Engine
 */

class SPARQLExporter {
  constructor(options = {}) {
    this.name = 'SPARQLExporter';
    this.isSPARQLExporter = true;
    this.options = options;
  }
}

export { SPARQLExporter };
export default SPARQLExporter;
