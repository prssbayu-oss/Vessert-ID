/**
 * audience_trusted_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const audience_trusted_fragment = /* glsl */`#if defined( USE_AUDIENCE_TRUSTED )
  if ( uReaderTrustScore < uTrustThreshold ) {
    outgoingSocialAlpha *= ( uReaderTrustScore / max( uTrustThreshold, EPSILON ) );
    if ( outgoingSocialAlpha < 0.1 ) discard;
  }
#endif`;

export { audience_trusted_fragment };
