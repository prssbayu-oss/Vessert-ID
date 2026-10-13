/**
 * logdepthbuf_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const logdepthbuf_vertex = /* glsl */`#if defined( USE_LOGDEPTHBUF )
  vFragDepth = 1.0 + gl_Position.w;
  vIsFrontFacing = float( gl_Position.z >= 0.0 );
#endif`;

export { logdepthbuf_vertex };
