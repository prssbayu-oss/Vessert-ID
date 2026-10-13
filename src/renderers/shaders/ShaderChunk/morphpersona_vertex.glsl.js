/**
 * morphpersona_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const morphpersona_vertex = /* glsl */`#if defined( USE_MORPH_PERSONA )
  transformedAddress.xyz += personaWeight * personaOffset;
#endif`;

export { morphpersona_vertex };
