/**
 * audience_fragment_maps.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const audience_fragment_maps = /* glsl */`#if defined( USE_AUDIENCE_MAP )
  vec4 audienceMapTexel = texture2D( audienceMap, vCoord );
  outgoingSocialAlpha *= audienceMapTexel.r;
#endif`;

export { audience_fragment_maps };
