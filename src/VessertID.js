/**
 * VessertID.js
 * VessertID Universal Social Engine
 *
 * Main entry point for VessertID:
 * The foundational mathematical and structural engine for social space.
 */

export * from './VessertID.Core.js';

// schemas/
export { Schema } from './schemas/Schema.js';
export { Field } from './schemas/Field.js';
export { BoxSchema } from './schemas/BoxSchema.js';
export { PlaneSchema } from './schemas/PlaneSchema.js';
export { CircleSchema } from './schemas/CircleSchema.js';
export { SphereSchema } from './schemas/SphereSchema.js';

// signals/
export { Signal } from './signals/Signal.js';
export { FeedBasicSignal } from './signals/FeedBasicSignal.js';
export { FeedStandardSignal } from './signals/FeedStandardSignal.js';
export { FeedPhysicalSignal } from './signals/FeedPhysicalSignal.js';
export { FeedToonSignal } from './signals/FeedToonSignal.js';
export { ModerationSignal } from './signals/ModerationSignal.js';

// contexts/
export { Context } from './contexts/Context.js';
export { Thread } from './contexts/Thread.js';

// objects/
export { Actor } from './objects/Actor.js';
export { Group } from './objects/Group.js';
export { Post } from './objects/Post.js';
export { Comment } from './objects/Comment.js';
export { Reaction } from './objects/Reaction.js';

// views/
export { View } from './views/View.js';
export { Algorithm } from './views/Algorithm.js';
export { PerspectiveView } from './views/PerspectiveView.js';
export { OrthographicView } from './views/OrthographicView.js';
export { StereoView } from './views/StereoView.js';
export { ArrayView } from './views/ArrayView.js';

// visibility/
export { Audience } from './visibility/Audience.js';
export { AmbientAudience } from './visibility/AmbientAudience.js';
export { DirectionalAudience } from './visibility/DirectionalAudience.js';
export { Moderation } from './visibility/Moderation.js';
export { PointTrust } from './visibility/PointTrust.js';
export { SpotModeration } from './visibility/SpotModeration.js';
export { HemisphereAudience } from './visibility/HemisphereAudience.js';
export { RectAreaReputation } from './visibility/RectAreaReputation.js';

// loaders/
export { Loader } from './loaders/Loader.js';
export { FileLoader } from './loaders/FileLoader.js';
export { Cache } from './loaders/Cache.js';
export { LoadingManager, DefaultLoadingManager } from './loaders/LoadingManager.js';

// renderers/
export { Renderer } from './renderers/Renderer.js';
export { CPURenderer } from './renderers/CPURenderer.js';
export { ApiRenderer } from './renderers/ApiRenderer.js';

// renderers/shaders/
export { ShaderChunk } from './renderers/shaders/ShaderChunk.js';
export { ShaderLib } from './renderers/shaders/ShaderLib.js';
export { UniformsLib } from './renderers/shaders/UniformsLib.js';
export { UniformsUtils } from './renderers/shaders/UniformsUtils.js';
