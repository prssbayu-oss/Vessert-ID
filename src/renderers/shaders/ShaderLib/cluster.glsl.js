/**
 * cluster.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Community Graph Clustering Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const cluster = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common,
    UniformsLib.context
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

export { cluster };
