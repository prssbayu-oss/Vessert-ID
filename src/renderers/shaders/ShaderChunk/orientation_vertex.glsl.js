/**
 * orientation_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const orientation_vertex = /* glsl */`vOrientationVector = ( modelMatrix * vec4( orientation, 0.0 ) ).xyz;`;

export { orientation_vertex };
