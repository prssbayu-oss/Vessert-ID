/**
 * signalprivate.glsl.js
 * VessertID Universal Social Engine Shader Program
 * End-to-End Encrypted Direct Signal Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const signalprivate = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common,
    UniformsLib.privacy,
    UniformsLib.audience
  ]),
  vertexShader: /* glsl */`#include <common>
#include <coord_pars_vertex>

attribute vec3 addressPosition;
attribute float addressWeight;
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
#include <privacyhash_pars_fragment>
#include <privacytest_pars_fragment>
#include <audience_pars_begin>
#include <audience_private_pars_fragment>

uniform vec3 diffuseTone;
uniform float opacity;

void main() {
  #include <audience_fragment_begin>
  #include <privacytest_fragment>
  #include <privacyhash_fragment>
  #include <audience_private_fragment>
  #include <audience_fragment_end>
}`
};

export { signalprivate };
