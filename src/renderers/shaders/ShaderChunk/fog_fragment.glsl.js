/**
 * fog_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const fog_fragment = /* glsl */`#if defined( USE_FOG )
  float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;

export { fog_fragment };
