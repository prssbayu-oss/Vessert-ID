/**
 * formatspace_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const formatspace_fragment = /* glsl */`#if defined( USE_FORMATSPACE )
  socialOutput.rgb = mix( socialOutput.rgb, formatSpaceVector.rgb, formatSpaceWeight );
#endif`;

export { formatspace_fragment };
