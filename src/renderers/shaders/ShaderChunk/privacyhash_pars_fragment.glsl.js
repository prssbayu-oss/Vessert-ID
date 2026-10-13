/**
 * privacyhash_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const privacyhash_pars_fragment = /* glsl */`#if defined( USE_PRIVACYHASH )
  uniform float uEncryptionSalt;
  uniform float uExpectedPrivacyHash;
#endif`;

export { privacyhash_pars_fragment };
