/**
 * Pipeline.test.js
 * End-to-end integration test for pure VessertID Engine:
 * 100% internal primitives, no external APIs.
 * Context -> Nodes (Post/Comment/Reaction) -> Audience -> View -> Physics -> Composer -> FeedTarget
 */
import { Context } from '../src/contexts/Context.js';
import { Post } from '../src/objects/Post.js';
import { Comment } from '../src/objects/Comment.js';
import { Reaction } from '../src/objects/Reaction.js';
import { AmbientAudience } from '../src/visibility/AmbientAudience.js';
import { DirectionalAudience } from '../src/visibility/DirectionalAudience.js';
import { PointTrust } from '../src/visibility/PointTrust.js';
import { PerspectiveView } from '../src/views/PerspectiveView.js';
import { Algorithm } from '../src/views/Algorithm.js';
import { CPURenderer } from '../src/renderers/CPURenderer.js';

import { EffectComposer } from '../examples/jsm/postprocessing/EffectComposer.js';
import { FeedModerationPass } from '../examples/jsm/postprocessing/FeedModerationPass.js';
import { FeedRankingPass } from '../examples/jsm/postprocessing/FeedRankingPass.js';
import { ForcePhysics } from '../examples/jsm/physics/ForcePhysics.js';

console.log('--- Running Pure VessertID Internal Engine Pipeline Test ---');

// 1. Manifold Root (Context)
const context = new Context('social_manifold');
context.add(new AmbientAudience(0.6));
context.add(new DirectionalAudience('circle:developers', 1.0));
context.add(new PointTrust('actor:root_authority', 1.0, 3, 2.0));

// 2. Pure Native Social Nodes (Actor / Post / Comment / Reaction)
const now = Date.now();
const rootPost = new Post('actor:alice', 'VessertID adalah engine matematika murni untuk ruang sosial.', 'timeline', now - 1000 * 60 * 10);
const replyComment = new Comment('actor:bob', rootPost.uuid, 'Benar, sama seperti Three.js adalah engine murni untuk grafis 3D.', 'thread', now - 1000 * 60 * 5);
const likeReaction = new Reaction('actor:charlie', rootPost.uuid, 'like', 'interaction', now - 1000 * 60 * 2);
const toxicPost = new Post('actor:bad_agent', 'Teks pelanggaran spam', 'timeline', now);

rootPost.add(replyComment);
rootPost.add(likeReaction);

context.add(rootPost);
context.add(toxicPost);

console.assert(rootPost.isPost === true, 'Root Post is pure Node instance');
console.assert(replyComment.isComment === true, 'Comment is pure Node child');
console.assert(likeReaction.isReaction === true, 'Reaction is pure Node child');

// 3. Pure Internal Force Layout Simulation (ForcePhysics)
const physics = new ForcePhysics(context);
physics.step();
const posRoot = physics.getPosition(rootPost);
const posReply = physics.getPosition(replyComment);

console.assert(typeof posRoot.x === 'number' && typeof posRoot.y === 'number', 'Physics resolved 2D position for root node');
console.assert(typeof posReply.x === 'number' && typeof posReply.y === 'number', 'Physics resolved 2D position for child node');

// 4. Pure Algorithmic Evaluation (View & Algorithm)
const algorithm = new Algorithm('actor:alice', {
  halfLifeHours: 12,
  recencyWeight: 0.4,
  affinityWeight: 0.4,
  reactionWeight: 0.2
});

const perspectiveView = new PerspectiveView('actor:alice', 50, 1.0, 0.1, 1000);
const pScore = perspectiveView.scoreNode(rootPost, now);
console.assert(pScore > 0, 'PerspectiveView scored rootPost successfully');

// 5. Multi-Pass Postprocessing Pipeline (EffectComposer)
const renderer = new CPURenderer();
const composer = new EffectComposer(renderer, context, algorithm);

const moderationPass = new FeedModerationPass({
  blockList: ['actor:bad_agent'],
  blockedKeywords: ['spam']
});
const rankingPass = new FeedRankingPass(algorithm);

composer.addPass(moderationPass);
composer.addPass(rankingPass);

const finalTarget = composer.render();
const finalItems = finalTarget.getItems();

console.assert(finalItems.length === 3, `Expected 3 compliant items (root post, reply comment, like reaction), got ${finalItems.length}`);
console.assert(!finalItems.some(i => i.author === 'actor:bad_agent'), 'Toxic post filtered by internal moderation pass');

console.log('--- ALL PURE VESSERTID ENGINE TESTS PASSED! ---');
