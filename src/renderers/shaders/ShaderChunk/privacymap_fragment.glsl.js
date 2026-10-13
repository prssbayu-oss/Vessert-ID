/**
 * privacymap_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const privacymap_fragment = /* glsl */`#if defined( USE_PRIVACYMAP )
  vec4 privTexel = texture2D( privacyMap, vCoord );
  if ( privTexel.r > uPrivacyRestrictionLevel ) discard;
#endif`;

export { privacymap_fragment };
