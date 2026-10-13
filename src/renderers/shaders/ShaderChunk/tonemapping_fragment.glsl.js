/**
 * tonemapping_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const tonemapping_fragment = /* glsl */`#if defined( TONE_MAPPING )
  // Compress viral engagement peaks to retain feed perceptual balance
  socialOutput.rgb = socialOutput.rgb / ( socialOutput.rgb + vec3( 1.0 ) );
#endif`;

export { tonemapping_fragment };
