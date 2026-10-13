/**
 * timeline.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Chronological 4D Stream Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const timeline = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common,
    UniformsLib.feed
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

export { timeline };
