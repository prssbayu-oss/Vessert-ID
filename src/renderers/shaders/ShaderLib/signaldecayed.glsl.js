/**
 * signaldecayed.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Temporal Half-Life Decay Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const signaldecayed = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common,
    UniformsLib.feed
  ]),
  vertexShader: /* glsl */`#include <common>

attribute vec3 addressPosition;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec3 vWorldAddress;

void main() {
  #include <begin_address>
  #include <project_address_vertex>
  #include <worldaddress_vertex>
}`,
  fragmentShader: /* glsl */`#include <common>

uniform vec3 diffuseTone;
uniform float opacity;
uniform float feedTime;
uniform float decayFactor;

void main() {
  float decay = exp( -decayFactor * feedTime );
  gl_FragColor = vec4( diffuseTone * decay, opacity * decay );
}`
};

export { signaldecayed };
