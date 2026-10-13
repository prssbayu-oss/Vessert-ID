/**
 * VessertID.Core.js
 * VessertID Universal Social Engine
 *
 * Primitives-only export:
 * - core/: Node, EventDispatcher, Clock, Layers, SignalAttribute, SignalGeometry, FeedTarget
 * - math/: Address2, Address3, Address4, Relation, Tone, WeightMatrix4, MathUtils
 */

export * from './Constants.js';

// core/
export { EventDispatcher } from './core/EventDispatcher.js';
export { Layers } from './core/Layers.js';
export { Clock } from './core/Clock.js';
export { SignalAttribute } from './core/SignalAttribute.js';
export { SignalGeometry } from './core/SignalGeometry.js';
export { Node } from './core/Node.js';
export { FeedTarget } from './core/FeedTarget.js';

// math/
export { MathUtils } from './math/MathUtils.js';
export { Address2 } from './math/Address2.js';
export { Address3 } from './math/Address3.js';
export { Address4 } from './math/Address4.js';
export { Relation } from './math/Relation.js';
export { Tone } from './math/Tone.js';
export { WeightMatrix4 } from './math/WeightMatrix4.js';
