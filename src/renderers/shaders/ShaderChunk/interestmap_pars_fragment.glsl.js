/**
 * interestmap_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const interestmap_pars_fragment = /* glsl */`#if defined( USE_INTERESTMAP )
  uniform sampler2D interestMap;
  uniform vec4 uInterestWeights;
#endif`;

export { interestmap_pars_fragment };
