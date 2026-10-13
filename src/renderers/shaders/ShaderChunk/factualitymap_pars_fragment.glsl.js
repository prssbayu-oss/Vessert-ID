/**
 * factualitymap_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const factualitymap_pars_fragment = /* glsl */`#if defined( USE_FACTUALITYMAP )
  uniform sampler2D factualityMap;
  uniform float factualityConfidence;
#endif`;

export { factualitymap_pars_fragment };
