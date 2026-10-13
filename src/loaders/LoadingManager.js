/**
 * LoadingManager.js
 * VessertID Universal Social Engine
 * Tracks ingestion progress across multiple social loaders (analogous to Three.js LoadingManager)
 */
class LoadingManager {
  constructor(onLoad, onProgress, onError) {
    this.onStart = undefined;
    this.onLoad = onLoad;
    this.onProgress = onProgress;
    this.onError = onError;

    this.isLoading = false;
    this.itemsLoaded = 0;
    this.itemsTotal = 0;
    this.urlModifier = undefined;
    this.handlers = [];
    this.isLoadingManager = true;
  }

  itemStart(url) {
    this.itemsTotal++;
    if (!this.isLoading) {
      if (this.onStart !== undefined) {
        this.onStart(url, this.itemsLoaded, this.itemsTotal);
      }
    }
    this.isLoading = true;
  }

  itemEnd(url) {
    this.itemsLoaded++;
    if (this.onProgress !== undefined) {
      this.onProgress(url, this.itemsLoaded, this.itemsTotal);
    }
    if (this.itemsLoaded === this.itemsTotal) {
      this.isLoading = false;
      if (this.onLoad !== undefined) {
        this.onLoad();
      }
    }
  }

  itemError(url) {
    if (this.onError !== undefined) {
      this.onError(url);
    }
  }

  resolveURL(url) {
    if (this.urlModifier) {
      return this.urlModifier(url);
    }
    return url;
  }

  setURLModifier(transform) {
    this.urlModifier = transform;
    return this;
  }
}

const DefaultLoadingManager = new LoadingManager();

export { LoadingManager, DefaultLoadingManager };
