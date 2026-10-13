/**
 * begin_address.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const begin_address = /* glsl */`// Initialize transformed social address coordinate from vertex attributes or uniforms
vec4 transformedAddress = vec4( addressPosition, 1.0 );
float nodeSocialWeight = addressWeight;`;

export { begin_address };
