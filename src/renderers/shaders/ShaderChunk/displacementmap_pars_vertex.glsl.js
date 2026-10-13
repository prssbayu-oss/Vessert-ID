/**
 * displacementmap_pars_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const displacementmap_pars_vertex = /* glsl */`#if defined( USE_DISPLACEMENTMAP )
  uniform sampler2D displacementMap;
  uniform float displacementScale;
  uniform float displacementBias;
#endif`;

export { displacementmap_pars_vertex };
