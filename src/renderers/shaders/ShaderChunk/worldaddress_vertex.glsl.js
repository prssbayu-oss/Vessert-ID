/**
 * worldaddress_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const worldaddress_vertex = /* glsl */`#if defined( USE_WORLD_ADDRESS )
  vWorldAddress = ( modelMatrix * transformedAddress ).xyz;
#else
  vWorldAddress = transformedAddress.xyz;
#endif`;

export { worldaddress_vertex };
