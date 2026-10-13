/**
 * batching_pars_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const batching_pars_vertex = /* glsl */`#if defined( BATCHING )
  attribute float batchId;
  uniform highp sampler2D batchAddressTexture;
#endif`;

export { batching_pars_vertex };
