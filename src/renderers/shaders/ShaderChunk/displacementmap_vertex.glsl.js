/**
 * displacementmap_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const displacementmap_vertex = /* glsl */`#if defined( USE_DISPLACEMENTMAP )
  transformedAddress.xyz += normalize( transformedAddress.xyz + EPSILON ) * ( texture2D( displacementMap, coord ).x * displacementScale + displacementBias );
#endif`;

export { displacementmap_vertex };
