/**
 * RDFExporter.js
 * VessertID Universal Social Engine
 */

class RDFExporter {
  constructor(options = {}) {
    this.name = 'RDFExporter';
    this.isRDFExporter = true;
    this.options = options;
  }
}

export { RDFExporter };
export default RDFExporter;
