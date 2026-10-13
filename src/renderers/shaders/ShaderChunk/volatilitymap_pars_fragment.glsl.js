/**
 * volatilitymap_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const volatilitymap_pars_fragment = /* glsl */`#if defined( USE_VOLATILITYMAP )
  uniform sampler2D volatilityMap;
  uniform float uVelocityMultiplier;
#endif`;

export { volatilitymap_pars_fragment };
