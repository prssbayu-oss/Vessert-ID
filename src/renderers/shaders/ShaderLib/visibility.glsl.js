/**
 * visibility.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Frustum & Bounding Reach Visibility Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const visibility = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common,
    UniformsLib.audience
  ]),
  vertexShader: /* glsl */`#include <common>
#include <boundaries_pars_vertex>

attribute vec3 addressPosition;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
  #include <begin_address>
  #include <boundaries_vertex>
  #include <project_address_vertex>
}`,
  fragmentShader: /* glsl */`#include <common>
#include <boundaries_pars_fragment>

uniform vec3 diffuseTone;
uniform float opacity;

void main() {
  #include <boundaries_fragment>
  gl_FragColor = vec4( diffuseTone, opacity );
}`
};

export { visibility };
