/**
 * moderation.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Moderation Pass Classifier Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const moderation = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common,
    UniformsLib.moderation
  ]),
  vertexShader: /* glsl */`#include <common>
#include <moderationmap_pars_vertex>

attribute vec3 addressPosition;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
  #include <begin_address>
  #include <moderationmap_vertex>
  #include <project_address_vertex>
}`,
  fragmentShader: /* glsl */`#include <common>
#include <moderationmap_pars_fragment>

uniform vec3 diffuseTone;
uniform float opacity;

void main() {
  gl_FragColor = vec4( diffuseTone, opacity );
}`
};

export { moderation };
