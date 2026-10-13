/**
 * audience_familiar_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const audience_familiar_fragment = /* glsl */`#if defined( USE_AUDIENCE_FAMILIAR )
  if ( uAudienceLayer == 2 ) {
    float familiarDist = length( vWorldAddress.xy - uReaderContext.xy );
    float familiarReach = smoothstep( 0.0, uAudienceRange, familiarDist );
    outgoingSocialAlpha *= ( 1.0 - familiarReach * 0.5 );
  }
#endif`;

export { audience_familiar_fragment };
