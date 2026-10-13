/**
 * background.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Social Graph Ambient Backdrop Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const background = {
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

void main() {
  gl_FragColor = vec4( diffuseTone * 0.1, 1.0 );
}`
};

export { background };
