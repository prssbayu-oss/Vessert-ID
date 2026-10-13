/**
 * contextmap_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const contextmap_fragment = /* glsl */`#if defined( USE_CONTEXTMAP )
  vec4 contextTexel = texture2D( contextMap, vCoord );
  float resonance = dot( contextTexel.rgb, uReaderContextVector ) * contextResonance;
  socialOutput.rgb = mix( socialOutput.rgb, socialOutput.rgb * contextTexel.rgb, clamp01( resonance ) );
#endif`;

export { contextmap_fragment };
