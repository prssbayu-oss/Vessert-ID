/**
 * packing.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const packing = /* glsl */`// Packing & unpacking 4D Social Address and Reputation Harmonics for GPU buffers
vec4 packAddressToRGBA( vec4 address ) {
  return address * 0.5 + 0.5;
}

vec4 unpackAddressFromRGBA( vec4 packedAddress ) {
  return ( packedAddress - 0.5) * 2.0;
}

vec4 packReputationToRGBA( vec3 harmonics, float confidence ) {
  return vec4( harmonics * 0.5 + 0.5, clamp01( confidence ) );
}

vec3 unpackReputationFromRGBA( vec4 packed ) {
  return ( packed.rgb - 0.5 ) * 2.0;
}`;

export { packing };
