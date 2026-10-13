/**
 * ApiRenderer.js
 * VessertID Universal Social Engine
 *
 * Wire & Protocol Stream Renderer for VessertID Social Graphs.
 * Projects social nodes and addresses into native VessertID transmission envelopes:
 * - canonical: Universal 4D Address coordinate projection (from, to, context, time)
 * - feed: Structured feed frame with cursor and ranking weights
 * - stream: Real-time event packet with signal attributes and tone vectors
 * - graph: Relational graph representation with nodes and directional edges
 */

import { Renderer } from './Renderer.js';
import { FeedTarget } from '../core/FeedTarget.js';

class ApiRenderer extends Renderer {
  constructor(format = 'canonical') {
    super();
    this.isApiRenderer = true;
    this.format = format;
  }

  /**
   * Projects a Node's Address4 and Signal into a VessertID transmission wire frame.
   * @param {Node} node
   * @returns {Object}
   */
  project(node) {
    const addr = node.address;
    const text = node.signal ? (node.signal.text || '') : '';
    const tone = node.signal && node.signal.tone ? node.signal.tone : null;

    switch (this.format.toLowerCase()) {
      case 'stream':
        return {
          protocol: 'VessertID/Stream/1.0',
          id: node.uuid,
          type: node.type || 'Node',
          timestamp: addr.time,
          address: {
            from: addr.from,
            to: addr.to,
            context: addr.context,
            time: addr.time,
            uri: addr.toURI ? addr.toURI() : `${addr.from}->${addr.to}#${addr.context}`
          },
          signal: {
            text: text,
            tone: tone
          },
          layers: node.layers ? node.layers.mask : 1
        };

      case 'feed':
        return {
          protocol: 'VessertID/FeedEnvelope/1.0',
          nodeId: node.uuid,
          actor: addr.from,
          target: addr.to,
          scope: addr.context,
          publishedAt: addr.time,
          payload: text,
          weight: node.weightMatrix ? node.weightMatrix.elements : [1, 0, 0, 0],
          reach: node.reachSphere ? node.reachSphere.radius : 1.0
        };

      case 'graph':
        return {
          protocol: 'VessertID/GraphEdge/1.0',
          source: addr.from,
          target: addr.to,
          context: addr.context,
          timestamp: addr.time,
          nodeType: node.type || 'Node',
          relation: node.relationMatrix ? node.relationMatrix.elements : null
        };

      case 'canonical':
      default:
        return {
          protocol: 'VessertID/Canonical/1.0',
          from: addr.from,
          to: addr.to,
          context: addr.context,
          time: addr.time,
          uri: addr.toURI ? addr.toURI() : `${addr.from}->${addr.to}#${addr.context}`,
          signal: text
        };
    }
  }

  /**
   * Renders a context from a view into a FeedTarget containing projected API packets.
   */
  render(context, view, target = new FeedTarget()) {
    if (!context || !context.isNode) {
      console.error('ApiRenderer.render: Invalid context provided.');
      return target;
    }

    target.clear();
    const packets = [];

    context.traverseVisible((node) => {
      if (node !== context && (node.isActor || node.isPost || node.isComment || node.isReaction)) {
        if (!view.layers || view.layers.test(node.layers)) {
          packets.push(this.project(node));
        }
      }
    });

    target.write(packets);
    return target;
  }
}

export { ApiRenderer };
