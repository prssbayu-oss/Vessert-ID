/**
 * dithering_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const dithering_fragment = /* glsl */`#if defined( DITHERING )
  gl_FragColor.rgb += vec3( ( hashSocial( gl_FragCoord.xy ) - 0.5 ) * ( 1.0 / 255.0 ) );
#endif`;

export { dithering_fragment };
