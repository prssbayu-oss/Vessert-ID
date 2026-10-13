/**
 * trustprobes_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const trustprobes_pars_fragment = /* glsl */`#if defined( USE_TRUSTPROBES )
  uniform sampler2D trustProbeTexture;
  uniform int numTrustProbes;
#endif`;

export { trustprobes_pars_fragment };
