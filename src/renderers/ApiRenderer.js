/**
 * ApiRenderer.js
 * VessertID Universal Social Engine
 *
 * Platform Adapter: Projects VessertID Address coordinates and Nodes
 * into concrete platform envelopes:
 * 1. Forum 1990: (penulis, board, thread, waktu posting)
 * 2. Twitter: (akun, follower/publik, timeline, waktu tweet)
 * 3. TikTok: (kreator, audiens/algoritma, fyp, waktu upload)
 * 4. Like: (akun, objek, interaksi, waktu like)
 * 5. Follow: (akun, akun, relasi, waktu follow)
 */

import { Renderer } from './Renderer.js';

class ApiRenderer extends Renderer {
  constructor(targetPlatform = 'canonical') {
    super();
    this.isApiRenderer = true;
    this.targetPlatform = targetPlatform;
  }

  /**
   * Projects a Node's Address4 into the selected platform wire-format.
   */
  project(node) {
    const addr = node.address;
    const text = node.signal ? (node.signal.text || '') : '';

    switch (this.targetPlatform.toLowerCase()) {
      case 'forum1990':
      case 'usenet':
      case 'bbs':
        return {
          protocol: 'NNTP/BBS-1990',
          From: addr.from,
          Newsgroups: addr.to,
          Subject: addr.context,
          Date: new Date(addr.time).toUTCString(),
          MessageID: `<${node.uuid}@${addr.context}>`,
          Body: text,
          reduction: {
            dari: addr.from,
            ke: addr.to,
            konteks: addr.context,
            waktu: addr.time
          }
        };

      case 'twitter':
      case 'x':
        return {
          protocol: 'Twitter API v2 / Tweet Object',
          author_id: addr.from,
          recipient_scope: addr.to,
          conversation_id: addr.context,
          created_at: new Date(addr.time).toISOString(),
          text: text,
          reduction: {
            dari: addr.from,
            ke: addr.to,
            konteks: addr.context,
            waktu: addr.time
          }
        };

      case 'tiktok':
        return {
          protocol: 'TikTok FYP Stream Node',
          creator_id: addr.from,
          audience_target: addr.to,
          feed_partition: addr.context,
          published_timestamp: addr.time,
          video_caption: text,
          reduction: {
            dari: addr.from,
            ke: addr.to,
            konteks: addr.context,
            waktu: addr.time
          }
        };

      case 'like':
        return {
          protocol: 'ActivityPub / Like Activity',
          actor: addr.from,
          object: addr.to,
          context: addr.context,
          published: new Date(addr.time).toISOString(),
          reduction: {
            dari: addr.from,
            ke: addr.to,
            konteks: addr.context,
            waktu: addr.time
          }
        };

      case 'follow':
        return {
          protocol: 'Social Graph Follow Edge',
          follower: addr.from,
          following: addr.to,
          scope: addr.context,
          timestamp: addr.time,
          reduction: {
            dari: addr.from,
            ke: addr.to,
            konteks: addr.context,
            waktu: addr.time
          }
        };

      default:
        return {
          protocol: 'VessertID Canonical',
          from: addr.from,
          to: addr.to,
          context: addr.context,
          time: addr.time,
          uri: addr.toURI(),
          reduction: {
            dari: addr.from,
            ke: addr.to,
            konteks: addr.context,
            waktu: addr.time
          }
        };
    }
  }
}

export { ApiRenderer };
