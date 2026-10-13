/**
 * fog_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const fog_pars_fragment = /* glsl */`#if defined( USE_FOG )
  uniform vec3 fogColor;
  uniform float fogNear;
  uniform float fogFar;
  varying float vFogDepth;
#endif`;

export { fog_pars_fragment };
