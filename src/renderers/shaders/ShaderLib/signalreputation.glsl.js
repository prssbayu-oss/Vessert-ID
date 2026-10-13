/**
 * signalreputation.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Reputation Harmonics & Trust Heatmap Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const signalreputation = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common,
    UniformsLib.reputation
  ]),
  vertexShader: /* glsl */`#include <common>
#include <coord_pars_vertex>

attribute vec3 addressPosition;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec3 vWorldAddress;

void main() {
  #include <coord_vertex>
  #include <begin_address>
  #include <project_address_vertex>
  #include <worldaddress_vertex>
}`,
  fragmentShader: /* glsl */`#include <common>
#include <reputationmap_pars_fragment>

uniform vec3 diffuseTone;
uniform float opacity;

void main() {
  #include <audience_fragment_begin>
  socialOutput.rgb = mix( vec3( 0.1, 0.3, 0.8 ), vec3( 0.2, 0.9, 0.4 ), uReaderReputation );
  #include <audience_fragment_end>
}`
};

export { signalreputation };
