/**
 * detailmap_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const detailmap_pars_fragment = /* glsl */`#if defined( USE_DETAILMAP )
  uniform sampler2D detailMap;
  uniform float detailBlend;
#endif`;

export { detailmap_pars_fragment };
