/**
 * orientation_fragment_maps.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const orientation_fragment_maps = /* glsl */`#if defined( USE_ORIENTATION_MAP )
  orientationAlignment *= texture2D( orientationMap, vCoord ).r;
#endif`;

export { orientation_fragment_maps };
