/**
 * expressionmap_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const expressionmap_pars_fragment = /* glsl */`#if defined( USE_EXPRESSIONMAP )
  uniform sampler2D expressionMap;
  uniform float exprIntensity;
#endif`;

export { expressionmap_pars_fragment };
