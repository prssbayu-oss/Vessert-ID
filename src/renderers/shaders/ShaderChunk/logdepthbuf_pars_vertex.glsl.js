/**
 * logdepthbuf_pars_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const logdepthbuf_pars_vertex = /* glsl */`#if defined( USE_LOGDEPTHBUF )
  varying float vFragDepth;
  varying float vIsFrontFacing;
#endif`;

export { logdepthbuf_pars_vertex };
