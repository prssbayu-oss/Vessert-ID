/**
 * boundaries_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const boundaries_fragment = /* glsl */`#if defined( USE_BOUNDARIES )
  if ( any( lessThan( vWorldAddress, uFeedBoundMin ) ) || any( greaterThan( vWorldAddress, uFeedBoundMax ) ) ) {
    discard;
  }
#endif`;

export { boundaries_fragment };
