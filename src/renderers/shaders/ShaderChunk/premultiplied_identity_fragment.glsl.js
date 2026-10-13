/**
 * premultiplied_identity_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const premultiplied_identity_fragment = /* glsl */`#if defined( PREMULTIPLIED_IDENTITY )
  socialOutput.rgb *= socialOutput.a;
#endif`;

export { premultiplied_identity_fragment };
