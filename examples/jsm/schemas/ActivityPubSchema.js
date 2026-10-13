/**
 * ActivityPubSchema.js
 * VessertID Universal Social Engine
 */

class ActivityPubSchema {
  constructor(options = {}) {
    this.name = 'ActivityPubSchema';
    this.isActivityPubSchema = true;
    this.options = options;
  }
}

export { ActivityPubSchema };
export default ActivityPubSchema;
