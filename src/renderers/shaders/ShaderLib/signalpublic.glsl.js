/**
 * signalpublic.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Public Global Broadcast Signal Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const signalpublic = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common,
    UniformsLib.feed,
    UniformsLib.tone
  ]),
  vertexShader: /* glsl */`#include <common>
#include <coord_pars_vertex>
#include <boundaries_pars_vertex>
#include <tone_pars_vertex>

attribute vec3 addressPosition;
attribute float addressWeight;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
varying vec3 vWorldAddress;

void main() {
  #include <coord_vertex>
  #include <begin_address>
  #include <project_address_vertex>
  #include <worldaddress_vertex>
  #include <tone_vertex>
}`,
  fragmentShader: /* glsl */`#include <common>
#include <audience_pars_begin>
#include <audience_public_pars_fragment>
#include <tone_pars_fragment>

uniform vec3 diffuseTone;
uniform float opacity;

void main() {
  #include <audience_fragment_begin>
  #include <audience_public_fragment>
  #include <tone_fragment>
  #include <tonemapping_fragment>
  #include <audience_fragment_end>
}`
};

export { signalpublic };
