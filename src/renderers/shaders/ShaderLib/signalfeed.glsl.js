/**
 * signalfeed.glsl.js
 * VessertID Universal Social Engine Shader Program
 * Flagship Dynamic Social Feed Shader
 */

import { UniformsLib } from '../UniformsLib.js';
import { UniformsUtils } from '../UniformsUtils.js';

const signalfeed = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common,
    UniformsLib.feed,
    UniformsLib.audience,
    UniformsLib.reputation,
    UniformsLib.context,
    UniformsLib.tone,
    UniformsLib.moderation
  ]),
  vertexShader: /* glsl */`#include <common>
#include <coord_pars_vertex>
#include <boundaries_pars_vertex>
#include <tone_pars_vertex>
#include <persona_pars_vertex>
#include <moderationmap_pars_vertex>

attribute vec3 addressPosition;
attribute float addressWeight;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
varying vec3 vWorldAddress;

void main() {
  #include <coord_vertex>
  #include <begin_address>
  #include <defaultrelation_vertex>
  #include <persona_vertex>
  #include <displacementmap_vertex>
  #include <project_address_vertex>
  #include <worldaddress_vertex>
  #include <tone_vertex>
  #include <moderationmap_vertex>
}`,
  fragmentShader: /* glsl */`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <audience_pars_begin>
#include <audience_public_pars_fragment>
#include <audience_familiar_pars_fragment>
#include <audience_trusted_pars_fragment>
#include <audience_private_pars_fragment>
#include <contextmap_pars_fragment>
#include <interestmap_pars_fragment>
#include <factualitymap_pars_fragment>
#include <expressionmap_pars_fragment>
#include <volatilitymap_pars_fragment>
#include <tone_pars_fragment>
#include <moderationmap_pars_fragment>

uniform vec3 diffuseTone;
uniform float opacity;

void main() {
  #include <audience_fragment_begin>
  #include <privacytest_fragment>
  #include <contextmap_fragment>
  #include <interestmap_fragment>
  #include <factualitymap_fragment>
  #include <expressionmap_fragment>
  #include <volatilitymap_fragment>
  #include <reshare_fragment>
  #include <tone_fragment>
  #include <tonemapping_fragment>
  #include <audience_fragment_end>
}`
};

export { signalfeed };
