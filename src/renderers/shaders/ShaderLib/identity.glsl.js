/**
 * identity.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Cryptographic Identity Verification Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const identity = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common,
    UniformsLib.persona
  ]),
  vertexShader: /* glsl */`#include <common>
#include <persona_pars_vertex>

attribute vec3 addressPosition;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
  #include <begin_address>
  #include <persona_vertex>
  #include <project_address_vertex>
}`,
  fragmentShader: /* glsl */`#include <common>
#include <premultiplied_identity_fragment>

uniform vec3 diffuseTone;
uniform float opacity;

void main() {
  gl_FragColor = vec4( diffuseTone, opacity );
}`
};

export { identity };
