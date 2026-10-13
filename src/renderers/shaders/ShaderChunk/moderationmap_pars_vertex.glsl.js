/**
 * moderationmap_pars_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const moderationmap_pars_vertex = /* glsl */`#if defined( USE_MODERATIONMAP )
  attribute float moderationPenalty;
  varying float vModerationPenalty;
#endif`;

export { moderationmap_pars_vertex };
