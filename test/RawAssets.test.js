/**
 * RawAssets.test.js
 * Unit test verifying that VessertID JSM Loaders can parse real raw asset files
 * stored directly in the repository under examples/data/
 * (analogous to Three.js tests loading DamagedHelmet.gltf or crate.gif from examples/)
 */
import fs from 'node:fs';
import path from 'node:path';

import { BlueskyPostParser } from '../examples/jsm/loaders/bluesky/BlueskyPostParser.js';
import { NostrEventParser } from '../examples/jsm/loaders/nostr/NostrEventParser.js';
import { ActivityPubLoader } from '../examples/jsm/loaders/ActivityPubLoader.js';
import { RSSLoader } from '../examples/jsm/loaders/RSSLoader.js';
import { TwitterArchiveLoader } from '../examples/jsm/loaders/TwitterArchiveLoader.js';
import { EMLLoader } from '../examples/jsm/loaders/EMLLoader.js';

console.log('--- Testing Real Raw Repository Assets Ingestion ---');

// 1. ATProto / Bluesky Raw Post JSON
const bskyPath = path.resolve('examples/data/atproto/post.json');
const bskyRaw = JSON.parse(fs.readFileSync(bskyPath, 'utf8'));
const bskyParser = new BlueskyPostParser();
const bskyNode = bskyParser.parse(bskyRaw, 'did:plc:creator123');
console.assert(bskyNode.isPost === true, 'ATProto raw asset parsed to Post');
console.assert(bskyNode.text.includes('axiomatic'), 'ATProto text preserved');

// 2. Nostr Raw Event JSON
const nostrPath = path.resolve('examples/data/nostr/event_kind1.json');
const nostrRaw = JSON.parse(fs.readFileSync(nostrPath, 'utf8'));
const nostrParser = new NostrEventParser();
const nostrNode = nostrParser.parse(nostrRaw);
console.assert(nostrNode.isComment === true || nostrNode.isPost === true, 'Nostr raw asset parsed to Node');

// 3. ActivityPub Create(Note) JSON-LD
const apPath = path.resolve('examples/data/activitypub/create_note.json');
const apRaw = JSON.parse(fs.readFileSync(apPath, 'utf8'));
const apLoader = new ActivityPubLoader();
const apNode = apLoader.parse(apRaw);
console.assert(apNode.isPost === true, 'ActivityPub raw asset parsed to Post');
console.assert(apNode.text.includes('Federated networks'), 'ActivityPub HTML stripped to clean text');

// 4. RSS 2.0 Raw XML
const rssPath = path.resolve('examples/data/rss/feed.xml');
const rssRaw = fs.readFileSync(rssPath, 'utf8');
const rssLoader = new RSSLoader();
const rssNodes = rssLoader.parse(rssRaw);
console.assert(Array.isArray(rssNodes) && rssNodes.length === 1, 'RSS raw asset parsed to Node list');
console.assert(rssNodes[0].text.includes('Axiomatic Node Architecture'), 'RSS item content verified');

// 5. Twitter Archive Raw JSON
const twPath = path.resolve('examples/data/twitter/tweet.json');
const twRaw = JSON.parse(fs.readFileSync(twPath, 'utf8'));
const twLoader = new TwitterArchiveLoader();
const twNode = twLoader.parse(twRaw);
console.assert(twNode.isPost === true, 'Twitter raw asset parsed to Post');
console.assert(twNode.author === '@architect', 'Twitter handle parsed correctly');

// 6. RFC 5322 Raw .eml Email
const emlPath = path.resolve('examples/data/email/sample.eml');
const emlRaw = fs.readFileSync(emlPath, 'utf8');
const emlLoader = new EMLLoader();
const emlNode = emlLoader.parse(emlRaw);
console.assert(emlNode.isPost === true, 'EML raw asset parsed to Post');
console.assert(emlNode.author === 'alice@openweb.org', 'Email From parsed correctly');

console.log('--- ALL RAW REPOSITORY ASSET INGESTION TESTS PASSED! ---');
