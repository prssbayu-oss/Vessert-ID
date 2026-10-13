/**
 * CSVExporter.js
 * VessertID Universal Social Engine
 */

class CSVExporter {
  constructor(options = {}) {
    this.name = 'CSVExporter';
    this.isCSVExporter = true;
    this.options = options;
  }
}

export { CSVExporter };
export default CSVExporter;
