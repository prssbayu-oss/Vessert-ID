/**
 * default_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const default_vertex = /* glsl */`#include <common>
#include <coord_pars_vertex>
#include <boundaries_pars_vertex>
#include <tone_pars_vertex>

attribute vec3 addressPosition;
attribute float addressWeight;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
varying vec3 vWorldAddress;

void main() {
  #include <coord_vertex>
  #include <begin_address>
  #include <project_address_vertex>
  #include <worldaddress_vertex>
  #include <tone_vertex>
}`;

export { default_vertex };
