/**
 * signalmoderated.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Moderation & Safety Review Stream Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const signalmoderated = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common,
    UniformsLib.moderation
  ]),
  vertexShader: /* glsl */`#include <common>
#include <moderationmap_pars_vertex>

attribute vec3 addressPosition;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec3 vWorldAddress;

void main() {
  #include <begin_address>
  #include <moderationmap_vertex>
  #include <project_address_vertex>
  #include <worldaddress_vertex>
}`,
  fragmentShader: /* glsl */`#include <common>
#include <moderationmap_pars_fragment>
#include <moderationmask_pars_fragment>

uniform vec3 diffuseTone;
uniform float opacity;

void main() {
  #include <audience_fragment_begin>
  if ( vModerationPenalty > uModerationThreshold ) {
    socialOutput.rgb = mix( socialOutput.rgb, vec3( 0.8, 0.1, 0.1 ), 0.6 );
  }
  #include <audience_fragment_end>
}`
};

export { signalmoderated };
