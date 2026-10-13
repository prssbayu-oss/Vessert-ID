/**
 * contextmap_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const contextmap_pars_fragment = /* glsl */`#if defined( USE_CONTEXTMAP )
  uniform sampler2D contextMap;
  uniform vec3 uReaderContextVector;
  uniform float contextResonance;
#endif`;

export { contextmap_pars_fragment };
