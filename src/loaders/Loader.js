/**
 * Loader.js
 * VessertID Universal Social Engine
 * Base class for all data loaders and protocol ingesters (analogous to Three.js Loader)
 */
import { DefaultLoadingManager } from './LoadingManager.js';

class Loader {
  constructor(manager = DefaultLoadingManager) {
    this.manager = manager;
    this.crossOrigin = 'anonymous';
    this.path = '';
    this.resourcePath = '';
    this.requestHeader = {};
    this.isLoader = true;
  }

  load() {}

  loadAsync(url, onProgress) {
    return new Promise((resolve, reject) => {
      this.load(url, resolve, onProgress, reject);
    });
  }

  parse() {}

  setCrossOrigin(crossOrigin) {
    this.crossOrigin = crossOrigin;
    return this;
  }

  setPath(path) {
    this.path = path;
    return this;
  }

  setResourcePath(resourcePath) {
    this.resourcePath = resourcePath;
    return this;
  }

  setRequestHeader(requestHeader) {
    this.requestHeader = requestHeader;
    return this;
  }
}

export { Loader };
