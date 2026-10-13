/**
 * volatilitymap_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const volatilitymap_fragment = /* glsl */`#if defined( USE_VOLATILITYMAP )
  vec4 volTexel = texture2D( volatilityMap, vCoord );
  float volatilityBoost = 1.0 + volTexel.r * uVelocityMultiplier;
  socialOutput.rgb *= volatilityBoost;
#endif`;

export { volatilitymap_fragment };
