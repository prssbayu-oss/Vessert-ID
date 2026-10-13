/**
 * HemisphereAudience.js
 * VessertID Universal Social Engine
 * Dual public vs private environmental audience (analogous to HemisphereLight in Three.js)
 * Balances ambient public broadcast reach against intimate private ground reach.
 */
import { Audience } from './Audience.js';

class HemisphereAudience extends Audience {
  constructor(publicIntensity = 0.6, privateIntensity = 0.4) {
    super((publicIntensity + privateIntensity) / 2);
    this.type = 'HemisphereAudience';
    this.publicIntensity = publicIntensity;
    this.privateIntensity = privateIntensity;
    this.isHemisphereAudience = true;
  }

  getAudienceWeight(isPublicScope = true) {
    return isPublicScope ? this.publicIntensity : this.privateIntensity;
  }

  copy(source, recursive = true) {
    super.copy(source, recursive);
    this.publicIntensity = source.publicIntensity;
    this.privateIntensity = source.privateIntensity;
    return this;
  }
}

export { HemisphereAudience };
