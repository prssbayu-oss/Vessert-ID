/**
 * FileLoader.js
 * VessertID Universal Social Engine
 * Internal data and buffer loader for VessertID (analogous to Three.js FileLoader)
 */
import { Loader } from './Loader.js';
import { Cache } from './Cache.js';

class FileLoader extends Loader {
  constructor(manager) {
    super(manager);
    this.responseType = 'json';
    this.mimeType = 'application/json';
    this.isFileLoader = true;
  }

  setResponseType(value) {
    this.responseType = value;
    return this;
  }

  setMimeType(value) {
    this.mimeType = value;
    return this;
  }

  parse(data) {
    if (typeof data === 'string' && this.responseType === 'json') {
      try {
        return JSON.parse(data);
      } catch (e) {
        return data;
      }
    }
    return data;
  }
}

export { FileLoader };
