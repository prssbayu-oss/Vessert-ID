/**
 * privacytest_pars_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const privacytest_pars_fragment = /* glsl */`#if defined( USE_PRIVACYTEST )
  uniform int uPrivacyMask;
  uniform int uReaderPermissionMask;
#endif`;

export { privacytest_pars_fragment };
