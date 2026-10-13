/**
 * contextmap_common_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const contextmap_common_pars_fragment = /* glsl */`#if defined( USE_CONTEXTMAP )
  uniform sampler2D contextMap;
  uniform float contextResonance;
#endif`;

export { contextmap_common_pars_fragment };
