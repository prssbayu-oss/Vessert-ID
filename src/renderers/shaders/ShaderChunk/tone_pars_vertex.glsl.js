/**
 * tone_pars_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const tone_pars_vertex = /* glsl */`#if defined( USE_TONE )
  attribute float sentimentPolarity;
  varying float vSentimentPolarity;
#endif`;

export { tone_pars_vertex };
