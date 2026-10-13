/**
 * moderationmask_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const moderationmask_pars_fragment = /* glsl */`#if defined( USE_MODERATIONMASK )
  uniform float uDownrankPenalty;
  uniform float uContentAdvisorySeverity;
#endif`;

export { moderationmask_pars_fragment };
