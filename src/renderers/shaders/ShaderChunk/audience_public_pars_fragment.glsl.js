/**
 * audience_public_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const audience_public_pars_fragment = /* glsl */`#if defined( USE_AUDIENCE_PUBLIC )
  uniform float uFeedCurrentTime;
  uniform float uSignalHalfLife;
  varying float vAddressTimestamp;
#endif`;

export { audience_public_pars_fragment };
