/**
 * map_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const map_fragment = /* glsl */`#if defined( USE_MAP )
  vec4 mapTexel = texture2D( map, vCoord );
  diffuseTone.rgb *= mapTexel.rgb;
#endif`;

export { map_fragment };
