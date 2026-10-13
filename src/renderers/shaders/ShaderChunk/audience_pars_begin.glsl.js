/**
 * audience_pars_begin.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const audience_pars_begin = /* glsl */`uniform int uAudienceLayer;
uniform float uReaderTrustScore;
uniform float uReaderReputation;
uniform vec4 uReaderContext;
varying vec3 vWorldAddress;
varying float vAudienceVisibility;`;

export { audience_pars_begin };
