/**
 * edgelinked.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Social Relational Edge Link Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const edgelinked = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common
  ]),
  vertexShader: /* glsl */`#include <common>

attribute vec3 addressPosition;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
  #include <begin_address>
  #include <project_address_vertex>
}`,
  fragmentShader: /* glsl */`#include <common>

uniform vec3 diffuseTone;
uniform float opacity;

void main() {
  gl_FragColor = vec4( diffuseTone, opacity );
}`
};

export { edgelinked };
