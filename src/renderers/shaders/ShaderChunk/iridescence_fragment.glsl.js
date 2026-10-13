/**
 * iridescence_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const iridescence_fragment = /* glsl */`#if defined( USE_IRIDESCENCE )
  socialOutput.rgb += iridescenceFactor * vec3( 0.1, 0.2, 0.3 );
#endif`;

export { iridescence_fragment };
