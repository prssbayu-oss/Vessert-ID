/**
 * audience_public_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const audience_public_fragment = /* glsl */`#if defined( USE_AUDIENCE_PUBLIC )
  if ( uAudienceLayer == 0 ) {
    float publicDecay = calculateSocialDecay( uFeedCurrentTime - vAddressTimestamp, uSignalHalfLife );
    outgoingSocialAlpha *= clamp( publicDecay, 0.05, 1.0 );
  }
#endif`;

export { audience_public_fragment };
