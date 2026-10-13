/**
 * Constants.js
 * VessertID Universal Social Engine
 */

export const REVISION = '0.1.0';

// Visibility / Audience bitmask layers
export const LayerPublic = 0;       // 1 << 0 (1)
export const LayerDirect = 1;       // 1 << 1 (2)
export const LayerCircle = 2;       // 1 << 2 (4)
export const LayerModerated = 3;    // 1 << 3 (8)
export const LayerAlgorithm = 4;    // 1 << 4 (16)
export const LayerEphemeral = 5;    // 1 << 5 (32)
export const LayerSystem = 6;       // 1 << 6 (64)

// Address Topology Types
export const AddressType = {
  DIRECT: 'direct',
  BROADCAST: 'broadcast',
  MULTICAST: 'multicast',
  REFLEXIVE: 'reflexive',
  ANONYMOUS: 'anonymous'
};

// Signal Formats
export const SignalFormat = {
  PLAINTEXT: 'text/plain',
  MARKDOWN: 'text/markdown',
  JSON: 'application/json',
  ATPROTO: 'application/vnd.atproto',
  SCALAR: 'application/x-scalar-metric',
  BINARY: 'application/octet-stream'
};

// Interaction Types
export const InteractionType = {
  POST: 'Post',
  COMMENT: 'Comment',
  REACTION: 'Reaction',
  FOLLOW: 'Follow',
  MENTION: 'Mention',
  REPOST: 'Repost',
  BOOKMARK: 'Bookmark'
};
