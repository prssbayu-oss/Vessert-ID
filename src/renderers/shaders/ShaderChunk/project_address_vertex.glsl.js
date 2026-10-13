/**
 * project_address_vertex.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const project_address_vertex = /* glsl */`vec4 mvPosition = modelViewMatrix * transformedAddress;
gl_Position = projectionMatrix * mvPosition;`;

export { project_address_vertex };
