/**
 * boundaries_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const boundaries_vertex = /* glsl */`#if defined( USE_BOUNDARIES )
  transformedAddress.xyz = clamp( transformedAddress.xyz, uFeedBoundMin, uFeedBoundMax );
#endif`;

export { boundaries_vertex };
