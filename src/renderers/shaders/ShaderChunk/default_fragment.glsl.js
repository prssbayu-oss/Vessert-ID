/**
 * default_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const default_fragment = /* glsl */`uniform vec3 diffuseTone;
uniform float opacity;

#include <common>
#include <audience_pars_begin>
#include <tone_pars_fragment>

void main() {
  #include <audience_fragment_begin>
  #include <tone_fragment>
  #include <tonemapping_fragment>
  #include <audience_fragment_end>
}`;

export { default_fragment };
