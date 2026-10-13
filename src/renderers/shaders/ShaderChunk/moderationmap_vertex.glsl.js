/**
 * moderationmap_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const moderationmap_vertex = /* glsl */`#if defined( USE_MODERATIONMAP )
  vModerationPenalty = moderationPenalty;
  transformedAddress.y -= moderationPenalty * 100.0;
#endif`;

export { moderationmap_vertex };
