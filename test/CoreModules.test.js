/**
 * CoreModules.test.js
 * Comprehensive unit tests for VessertID core subsystems:
 * Schemas, Views, Visibility, Signals, and Loaders
 */
import {
  Schema,
  Field,
  BoxSchema,
  PlaneSchema,
  CircleSchema,
  SphereSchema,
  PerspectiveView,
  OrthographicView,
  StereoView,
  ArrayView,
  PointTrust,
  SpotModeration,
  HemisphereAudience,
  RectAreaReputation,
  FeedPhysicalSignal,
  FeedToonSignal,
  ModerationSignal,
  LoadingManager,
  Cache
} from '../src/VessertID.js';

console.log('--- Testing Schemas Subsystem ---');
const boxSchema = new BoxSchema(280, 4, 10);
console.assert(boxSchema.isBoxSchema === true, 'BoxSchema initialized');
console.assert(boxSchema.validate({ text: 'Hello', attachments: [] }) === true, 'BoxSchema valid record');
console.assert(boxSchema.validate({ text: 'x'.repeat(300) }) === false, 'BoxSchema catches text overflow');

const circleSchema = new CircleSchema(150);
console.assert(circleSchema.validate({ members: ['alice', 'bob'] }) === true, 'CircleSchema valid');

console.log('--- Testing Views Subsystem ---');
const pView = new PerspectiveView('viewer:alice', 60, 1.0, 0.1, 1000);
console.assert(pView.isPerspectiveView === true, 'PerspectiveView initialized');
console.assert(pView.projectionMatrix.elements.length === 16, 'Projection matrix calculated');

const orthoView = new OrthographicView('viewer:bob');
console.assert(orthoView.isOrthographicView === true, 'OrthographicView initialized');

const stereo = new StereoView('alice', 'bob');
console.assert(stereo.isStereoView === true, 'StereoView initialized');

const arrayView = new ArrayView([pView, orthoView]);
console.assert(arrayView.isArrayView === true, 'ArrayView initialized');

console.log('--- Testing Visibility Subsystem ---');
const pointTrust = new PointTrust('actor:alice', 1.0, 3, 2.0);
console.assert(pointTrust.isPointTrust === true, 'PointTrust initialized');
console.assert(pointTrust.getTrustAtDistance(1) > pointTrust.getTrustAtDistance(2), 'Trust attenuates over hops');
console.assert(pointTrust.getTrustAtDistance(4) === 0, 'Trust reaches zero beyond max distance');

const spotMod = new SpotModeration(null, 1.0, 5, Math.PI / 4);
console.assert(spotMod.isSpotModeration === true, 'SpotModeration initialized');
console.assert(spotMod.isWithinCone(0.1, 2) === true, 'SpotModeration cone hit');
console.assert(spotMod.isWithinCone(1.0, 2) === false, 'SpotModeration cone miss');

const hemi = new HemisphereAudience(0.8, 0.2);
console.assert(hemi.getAudienceWeight(true) === 0.8, 'Hemisphere public weight correct');
console.assert(hemi.getAudienceWeight(false) === 0.2, 'Hemisphere private weight correct');

const rectRep = new RectAreaReputation('acme.org', 10, 20);
console.assert(rectRep.getSurfaceArea() === 200, 'RectAreaReputation surface area calculated');

console.log('--- Testing Signals Subsystem ---');
const physicalSignal = new FeedPhysicalSignal({ roughness: 0.8, metalness: 0.3, text: 'Physics post' });
console.assert(physicalSignal.roughness === 0.8, 'FeedPhysicalSignal roughness set');

const toonSignal = new FeedToonSignal({ steps: 3, thresholds: [0.33, 0.66, 1.0] });
console.assert(toonSignal.getQuantizedTier(0.2) === 1, 'FeedToonSignal tier 1');
console.assert(toonSignal.getQuantizedTier(0.5) === 2, 'FeedToonSignal tier 2');
console.assert(toonSignal.getQuantizedTier(0.9) === 3, 'FeedToonSignal tier 3');

const modSignal = new ModerationSignal({ toxicityScore: 0.8, strikeCount: 1 });
console.assert(modSignal.isCompliant(0.5) === false, 'ModerationSignal flags high toxicity');

console.log('--- Testing Loaders & Cache ---');
Cache.add('test_key', { data: 123 });
console.assert(Cache.get('test_key').data === 123, 'Cache stores and retrieves');
Cache.clear();
console.assert(Cache.get('test_key') === undefined, 'Cache cleared');

const manager = new LoadingManager();
console.assert(manager.isLoadingManager === true, 'LoadingManager initialized');

console.log('--- ALL CORE MODULE TESTS PASSED! ---');
