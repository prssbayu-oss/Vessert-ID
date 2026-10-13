/**
 * orientation_fragment_begin.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const orientation_fragment_begin = /* glsl */`float orientationAlignment = dot( normalize( vOrientationVector + EPSILON ), normalize( -vWorldAddress + EPSILON ) );`;

export { orientation_fragment_begin };
