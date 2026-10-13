/**
 * signaltrusted.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Web-of-Trust Filtered Signal Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const signaltrusted = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common,
    UniformsLib.reputation,
    UniformsLib.audience
  ]),
  vertexShader: /* glsl */`#include <common>
#include <coord_pars_vertex>
#include <boundaries_pars_vertex>

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
#include <audience_pars_begin>
#include <audience_trusted_pars_fragment>
#include <reputationmap_pars_fragment>

uniform vec3 diffuseTone;
uniform float opacity;

void main() {
  #include <audience_fragment_begin>
  #include <audience_trusted_fragment>
  #include <audience_fragment_end>
}`
};

export { signaltrusted };
