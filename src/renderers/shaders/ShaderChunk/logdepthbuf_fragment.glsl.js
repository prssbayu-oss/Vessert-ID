/**
 * logdepthbuf_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const logdepthbuf_fragment = /* glsl */`#if defined( USE_LOGDEPTHBUF )
  gl_FragDepthEXT = vFragDepth > 0.0 ? log2( vFragDepth ) * logDepthBufFC * 0.5 : gl_FragCoord.z;
#endif`;

export { logdepthbuf_fragment };
