/**
 * privacyhash_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const privacyhash_fragment = /* glsl */`#if defined( USE_PRIVACYHASH )
  float computedHash = hashSocial( vCoord + uEncryptionSalt );
  if ( abs( computedHash - uExpectedPrivacyHash ) > 0.01 ) discard;
#endif`;

export { privacyhash_fragment };
