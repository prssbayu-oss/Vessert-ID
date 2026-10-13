/**
 * contextmap_pars_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const contextmap_pars_vertex = /* glsl */`#if defined( USE_CONTEXTMAP )
  attribute vec2 contextCoord;
  varying vec2 vContextCoord;
#endif`;

export { contextmap_pars_vertex };
