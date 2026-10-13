/**
 * privacytest_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const privacytest_fragment = /* glsl */`#if defined( USE_PRIVACYTEST )
  if ( ( uPrivacyMask & uReaderPermissionMask ) == 0 ) {
    discard;
  }
#endif`;

export { privacytest_fragment };
