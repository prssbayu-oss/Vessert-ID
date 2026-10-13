/**
 * privacymap_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const privacymap_pars_fragment = /* glsl */`#if defined( USE_PRIVACYMAP )
  uniform sampler2D privacyMap;
  uniform float uPrivacyRestrictionLevel;
#endif`;

export { privacymap_pars_fragment };
