/**
 * distance.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Relational Hop Distance Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const distance = {
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

void main() {
  gl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), 1.0 );
}`
};

export { distance };
