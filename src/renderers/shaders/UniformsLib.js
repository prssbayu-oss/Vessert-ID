/**
 * UniformsLib.js
 * VessertID Universal Social Engine
 *
 * Standard uniform definitions for VessertID GPU social computation pipelines.
 */

import { Tone } from '../../math/Tone.js';
import { Address4 } from '../../math/Address4.js';
import { ReachSphere } from '../../math/ReachSphere.js';
import { RelationMatrix3 } from '../../math/RelationMatrix3.js';
import { ReputationHarmonics3 } from '../../math/ReputationHarmonics3.js';

const UniformsLib = {
  common: {
    tone: { value: /* @__PURE__ */ new Tone(0.18, 0.55, 0.95) },
    opacity: { value: 1.0 },
    address: { value: /* @__PURE__ */ new Address4(0, 0, 0, 0) },
    reachRadius: { value: 100.0 },
    decayFactor: { value: 0.05 }
  },

  audience: {
    uAudienceLayer: { value: 0 },
    uReaderTrustScore: { value: 1.0 },
    uReaderReputation: { value: 1.0 },
    uReaderContext: { value: /* @__PURE__ */ new Address4(0, 0, 0, 0) },
    uAudienceRange: { value: 50.0 }
  },

  reputation: {
    reputationHarmonics: { value: /* @__PURE__ */ new ReputationHarmonics3() },
    reputationMatrix: { value: /* @__PURE__ */ new RelationMatrix3() },
    trustThreshold: { value: 0.5 },
    decayRate: { value: 0.01 }
  },

  context: {
    contextPlaneOrigin: { value: [0, 0, 0] },
    contextPlaneNormal: { value: [0, 1, 0] },
    contextResonance: { value: 1.0 }
  },

  feed: {
    feedTime: { value: 0.0 },
    feedHorizon: { value: 500.0 },
    viralityFactor: { value: 1.2 },
    reachSphere: { value: /* @__PURE__ */ new ReachSphere() },
    interestWeights: { value: [1.0, 1.0, 1.0, 1.0] }
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
    badgeOffset: { value: [0, 0, 0] },
    identityVector: { value: [1, 0, 0, 0] }
  },

  tone: {
    sentimentPolarity: { value: 0.0 },
    valence: { value: 0.5 },
    arousal: { value: 0.5 },
    toneDominance: { value: 0.5 }
  },

  fog: {
    fogDensity: { value: 0.00025 },
    fogNear: { value: 1.0 },
    fogFar: { value: 2000.0 },
    fogColor: { value: [0.08, 0.09, 0.12] }
  }
};

export { UniformsLib };
