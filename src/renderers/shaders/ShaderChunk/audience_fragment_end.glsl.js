/**
 * audience_fragment_end.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const audience_fragment_end = /* glsl */`socialOutput.a = clamp01( outgoingSocialAlpha );
if ( socialOutput.a <= EPSILON ) {
  discard;
}
gl_FragColor = socialOutput;`;

export { audience_fragment_end };
