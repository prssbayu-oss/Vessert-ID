/**
 * map_signal_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const map_signal_fragment = /* glsl */`#if defined( USE_SIGNALMAP )
  vec4 signalTexel = texture2D( signalMap, vCoord );
  diffuseTone.rgb = mix( diffuseTone.rgb, signalTexel.rgb, signalTexel.a );
#endif`;

export { map_signal_fragment };
