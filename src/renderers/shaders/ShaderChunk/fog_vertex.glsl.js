/**
 * fog_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const fog_vertex = /* glsl */`#if defined( USE_FOG )
  vFogDepth = -mvPosition.z;
#endif`;

export { fog_vertex };
