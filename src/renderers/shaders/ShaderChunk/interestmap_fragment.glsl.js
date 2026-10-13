/**
 * interestmap_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const interestmap_fragment = /* glsl */`#if defined( USE_INTERESTMAP )
  vec4 interestTexel = texture2D( interestMap, vCoord );
  float interestResonance = dot( interestTexel, uInterestWeights );
  socialOutput.rgb *= clamp( interestResonance, 0.2, 2.0 );
#endif`;

export { interestmap_fragment };
