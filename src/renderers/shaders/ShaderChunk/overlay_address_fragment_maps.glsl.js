/**
 * overlay_address_fragment_maps.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const overlay_address_fragment_maps = /* glsl */`#if defined( USE_OVERLAY_MAP )
  vec4 overlayTexel = texture2D( overlayMap, vCoord );
  socialOutput.rgb = mix( socialOutput.rgb, overlayTexel.rgb, overlayTexel.a );
#endif`;

export { overlay_address_fragment_maps };
