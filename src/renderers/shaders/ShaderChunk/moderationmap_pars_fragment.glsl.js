/**
 * moderationmap_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const moderationmap_pars_fragment = /* glsl */`#if defined( USE_MODERATIONMAP )
  uniform sampler2D moderationMap;
  uniform float uModerationThreshold;
  uniform int uModerationAction;
  varying float vModerationPenalty;
#endif`;

export { moderationmap_pars_fragment };
