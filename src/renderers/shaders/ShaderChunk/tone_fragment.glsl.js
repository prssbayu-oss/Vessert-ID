/**
 * tone_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const tone_fragment = /* glsl */`#if defined( USE_TONE )
  vec3 calculatedTone = mix( toneNeutral, tonePositive, clamp01( vSentimentPolarity ) );
  calculatedTone = mix( calculatedTone, toneNegative, clamp01( -vSentimentPolarity ) );
  socialOutput.rgb = mix( socialOutput.rgb, calculatedTone, toneIntensity );
#endif`;

export { tone_fragment };
