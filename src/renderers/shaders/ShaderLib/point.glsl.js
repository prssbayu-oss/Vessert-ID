/**
 * point.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Actor Node Point Particle Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const point = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common,
    UniformsLib.tone
  ]),
  vertexShader: /* glsl */`#include <common>

attribute vec3 addressPosition;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
  #include <begin_address>
  gl_PointSize = 8.0;
  #include <project_address_vertex>
}`,
  fragmentShader: /* glsl */`#include <common>

uniform vec3 diffuseTone;
uniform float opacity;

void main() {
  vec2 coord = gl_PointCoord - vec2( 0.5 );
  if ( length( coord ) > 0.5 ) discard;
  gl_FragColor = vec4( diffuseTone, opacity );
}`
};

export { point };
