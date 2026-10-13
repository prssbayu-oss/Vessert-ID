/**
 * tone_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const tone_pars_fragment = /* glsl */`#if defined( USE_TONE )
  uniform vec3 tonePositive;
  uniform vec3 toneNegative;
  uniform vec3 toneNeutral;
  uniform float toneIntensity;
  varying float vSentimentPolarity;
#endif`;

export { tone_pars_fragment };
