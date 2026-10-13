/**
 * Reaction.js
 * VessertID Universal Social Engine
 *
 * Lightweight interaction actor (e.g. Like, Upvote, Favorite).
 * Address: (actor, targetObject, reactionContext, time)
 */

import { Actor } from './Actor.js';
import { SignalGeometry } from '../core/SignalGeometry.js';
import { FeedBasicSignal } from '../signals/FeedBasicSignal.js';

class Reaction extends Actor {
  constructor(actor = '', targetId = '', reactionType = 'like', context = 'interaction', time = Date.now()) {
    const geometry = new SignalGeometry();
    const signal = new FeedBasicSignal({
      text: reactionType,
      format: 'application/x-scalar-metric',
      weight: 1.0
    });

    super(geometry, signal);

    this.isReaction = true;
    this.type = 'Reaction';
    this.reactionType = reactionType;

    this.address.set(actor, targetId, `${context}:${reactionType}`, time);
  }
}

export { Reaction };
