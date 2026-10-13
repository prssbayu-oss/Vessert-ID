/**
 * reputationmap_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const reputationmap_pars_fragment = /* glsl */`#if defined( USE_REPUTATIONMAP )
  uniform sampler2D reputationMap;
  uniform vec3 reputationHarmonics;
#endif`;

export { reputationmap_pars_fragment };
