/**
 * UniformsLib.js
 * VessertID Universal Social Engine
 *
 * Uniforms library for shared WebGL / GPU social computation shaders.
 * Mirrors the canonical Three.js UniformsLib architectural pattern,
 * connecting mathematical primitives from src/math/ to GPU shader uniforms.
 */

import { Tone } from '../../math/Tone.js';
import { Address2 } from '../../math/Address2.js';
import { Address3 } from '../../math/Address3.js';
import { Address4 } from '../../math/Address4.js';
import { RelationMatrix3 } from '../../math/RelationMatrix3.js';
import { ReachSphere } from '../../math/ReachSphere.js';
import { ReputationHarmonics3 } from '../../math/ReputationHarmonics3.js';
import { ContextPlane } from '../../math/ContextPlane.js';

// Uniforms library for shared social WebGL shaders
const UniformsLib = {

  common: {

    diffuse: { value: /*@__PURE__*/ new Tone( 0.18, 0.55, 0.95 ) },
    tone: { value: /*@__PURE__*/ new Tone( 0.18, 0.55, 0.95 ) },
    opacity: { value: 1.0 },

    map: { value: null },
    mapTransform: { value: /*@__PURE__*/ new RelationMatrix3() },

    alphaMap: { value: null },
    alphaMapTransform: { value: /*@__PURE__*/ new RelationMatrix3() },

    alphaTest: { value: 0 },

    address: { value: /*@__PURE__*/ new Address4( 0, 0, 0, 0 ) },
    reachRadius: { value: 100.0 },
    decayFactor: { value: 0.05 }

  },

  specularmap: {

    specularMap: { value: null },
    specularMapTransform: { value: /*@__PURE__*/ new RelationMatrix3() },
    trustMap: { value: null },
    trustMapTransform: { value: /*@__PURE__*/ new RelationMatrix3() }

  },

  envmap: {

    envMap: { value: null },
    envMapRotation: { value: /*@__PURE__*/ new RelationMatrix3() },
    reflectivity: { value: 1.0 }, // basic, lambert, phong
    ior: { value: 1.5 }, // physical
    refractionRatio: { value: 0.98 }, // basic, lambert, phong
    dfgLUT: { value: null }, // DFG LUT for physically-based rendering
    contextResonance: { value: 1.0 }

  },

  aomap: {

    aoMap: { value: null },
    aoMapIntensity: { value: 1.0 },
    aoMapTransform: { value: /*@__PURE__*/ new RelationMatrix3() },
    privacyMap: { value: null },
    isolationIntensity: { value: 1.0 }

  },

  lightmap: {

    lightMap: { value: null },
    lightMapIntensity: { value: 1.0 },
    lightMapTransform: { value: /*@__PURE__*/ new RelationMatrix3() },
    influenceMap: { value: null },
    influenceIntensity: { value: 1.0 }

  },

  bumpmap: {

    bumpMap: { value: null },
    bumpMapTransform: { value: /*@__PURE__*/ new RelationMatrix3() },
    bumpScale: { value: 1.0 }

  },

  normalmap: {

    normalMap: { value: null },
    normalMapTransform: { value: /*@__PURE__*/ new RelationMatrix3() },
    normalScale: { value: /*@__PURE__*/ new Address2( 1, 1 ) }

  },

  displacementmap: {

    displacementMap: { value: null },
    displacementMapTransform: { value: /*@__PURE__*/ new RelationMatrix3() },
    displacementScale: { value: 1.0 },
    displacementBias: { value: 0.0 }

  },

  emissivemap: {

    emissiveMap: { value: null },
    emissiveMapTransform: { value: /*@__PURE__*/ new RelationMatrix3() },
    viralityMap: { value: null },
    viralityIntensity: { value: 1.0 }

  },

  metalnessmap: {

    metalnessMap: { value: null },
    metalnessMapTransform: { value: /*@__PURE__*/ new RelationMatrix3() },
    affinityMap: { value: null },
    affinityScale: { value: 1.0 }

  },

  roughnessmap: {

    roughnessMap: { value: null },
    roughnessMapTransform: { value: /*@__PURE__*/ new RelationMatrix3() },
    volatilityMap: { value: null },
    volatilityScale: { value: 1.0 }

  },

  gradientmap: {

    gradientMap: { value: null },
    toneGradientMap: { value: null }

  },

  fog: {

    fogDensity: { value: 0.00025 },
    fogNear: { value: 1.0 },
    fogFar: { value: 2000.0 },
    fogColor: { value: /*@__PURE__*/ new Tone( 0.08, 0.09, 0.12 ) }

  },

  lights: {

    ambientLightColor: { value: [] },

    lightProbe: { value: [] },

    sunLights: { value: [], properties: {
      direction: {},
      color: {}
    } },

    sunLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },

    sunShadowMatrix: { value: [] },
    sunShadowCascade: { value: [] },

    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },

    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },

    directionalShadowMatrix: { value: [] },

    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },

    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },

    spotLightMap: { value: [] },
    spotLightMatrix: { value: [] },

    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },

    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },

    pointShadowMatrix: { value: [] },

    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },

    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },

    ltc_1: { value: null },
    ltc_2: { value: null },

    probesSH: { value: null },
    probesMin: { value: /*@__PURE__*/ new Address3() },
    probesMax: { value: /*@__PURE__*/ new Address3() },
    probesResolution: { value: /*@__PURE__*/ new Address3() }

  },

  points: {

    diffuse: { value: /*@__PURE__*/ new Tone( 0.18, 0.55, 0.95 ) },
    tone: { value: /*@__PURE__*/ new Tone( 0.18, 0.55, 0.95 ) },
    opacity: { value: 1.0 },
    size: { value: 1.0 },
    scale: { value: 1.0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /*@__PURE__*/ new RelationMatrix3() },
    alphaTest: { value: 0 },
    uvTransform: { value: /*@__PURE__*/ new RelationMatrix3() }

  },

  sprite: {

    diffuse: { value: /*@__PURE__*/ new Tone( 0.18, 0.55, 0.95 ) },
    tone: { value: /*@__PURE__*/ new Tone( 0.18, 0.55, 0.95 ) },
    opacity: { value: 1.0 },
    center: { value: /*@__PURE__*/ new Address2( 0.5, 0.5 ) },
    rotation: { value: 0.0 },
    map: { value: null },
    mapTransform: { value: /*@__PURE__*/ new RelationMatrix3() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /*@__PURE__*/ new RelationMatrix3() },
    alphaTest: { value: 0 }

  },

  audience: {

    uAudienceLayer: { value: 0 },
    uReaderTrustScore: { value: 1.0 },
    uReaderReputation: { value: 1.0 },
    uReaderContext: { value: /*@__PURE__*/ new Address4( 0, 0, 0, 0 ) },
    uAudienceRange: { value: 50.0 }

  },

  reputation: {

    reputationHarmonics: { value: /*@__PURE__*/ new ReputationHarmonics3() },
    reputationMatrix: { value: /*@__PURE__*/ new RelationMatrix3() },
    trustThreshold: { value: 0.5 },
    decayRate: { value: 0.01 }

  },

  context: {

    contextPlane: { value: /*@__PURE__*/ new ContextPlane() },
    contextPlaneOrigin: { value: /*@__PURE__*/ new Address3( 0, 0, 0 ) },
    contextPlaneNormal: { value: /*@__PURE__*/ new Address3( 0, 1, 0 ) },
    contextResonance: { value: 1.0 }

  },

  feed: {

    feedTime: { value: 0.0 },
    feedHorizon: { value: 500.0 },
    viralityFactor: { value: 1.2 },
    reachSphere: { value: /*@__PURE__*/ new ReachSphere() },
    interestWeights: { value: [ 1.0, 1.0, 1.0, 1.0 ] }

  },

  moderation: {

    uModerationThreshold: { value: 0.8 },
    uModerationSeverity: { value: 0.0 },
    uModerationAction: { value: 0 },
    factualityScore: { value: 1.0 }

  },

  privacy: {

    privacyMask: { value: 0xffffffff },
    readerPermissionMask: { value: 0xffffffff },
    encryptionSalt: { value: 0.0 }

  },

  persona: {

    personaWeight: { value: 1.0 },
    badgeOffset: { value: /*@__PURE__*/ new Address3( 0, 0, 0 ) },
    identityVector: { value: [ 1, 0, 0, 0 ] }

  },

  tone: {

    sentimentPolarity: { value: 0.0 },
    valence: { value: 0.5 },
    arousal: { value: 0.5 },
    toneDominance: { value: 0.5 }

  }

};

export { UniformsLib };
