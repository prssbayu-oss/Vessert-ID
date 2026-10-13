/**
 * logdepthbuf_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const logdepthbuf_pars_fragment = /* glsl */`#if defined( USE_LOGDEPTHBUF )
  uniform float logDepthBufFC;
  varying float vFragDepth;
#endif`;

export { logdepthbuf_pars_fragment };
