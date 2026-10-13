/**
 * defaultrelation_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const defaultrelation_vertex = /* glsl */`#if defined( USE_RELATION_MATRIX )
  transformedAddress.xyz = ( relationMatrix * vec4( transformedAddress.xyz, 1.0 ) ).xyz;
#endif`;

export { defaultrelation_vertex };
