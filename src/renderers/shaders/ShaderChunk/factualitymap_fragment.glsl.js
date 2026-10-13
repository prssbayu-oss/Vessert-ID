/**
 * factualitymap_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const factualitymap_fragment = /* glsl */`#if defined( USE_FACTUALITYMAP )
  vec4 factTexel = texture2D( factualityMap, vCoord );
  float factualityModifier = mix( 0.4, 1.2, factTexel.r * factualityConfidence );
  socialOutput.rgb *= factualityModifier;
#endif`;

export { factualitymap_fragment };
