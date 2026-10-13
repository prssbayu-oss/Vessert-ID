/**
 * audience_private_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const audience_private_fragment = /* glsl */`#if defined( USE_AUDIENCE_PRIVATE )
  if ( uAudienceLayer == 1 ) {
    if ( abs( uReaderContext.x - vTargetActorId ) > EPSILON ) {
      discard;
    }
  }
#endif`;

export { audience_private_fragment };
