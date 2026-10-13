/**
 * reshare_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const reshare_fragment = /* glsl */`#if defined( USE_RESHARE )
  float reshareAmplification = 1.0 + log( 1.0 + float( uReshareCount ) ) * uReshareBoostFactor;
  socialOutput.rgb *= min( reshareAmplification, 2.5 );
#endif`;

export { reshare_fragment };
