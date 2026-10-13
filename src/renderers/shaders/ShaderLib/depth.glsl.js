/**
 * depth.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Social Graph Depth Network Distance Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const depth = {
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
#include <packing>

void main() {
  gl_FragColor = vec4( vec3( gl_FragCoord.z ), 1.0 );
}`
};

export { depth };
