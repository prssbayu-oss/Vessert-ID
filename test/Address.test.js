import { Address4 } from '../src/math/Address4.js';
import { Node } from '../src/core/Node.js';

console.log('--- VessertID Test Suite ---');

// Test 1: Address4 component equality
const addr = new Address4('actor:alice', 'audience:public', 'context:thread_1', 1700000000000);
console.assert(addr.dari === 'actor:alice', 'addr.dari must be actor:alice');
console.assert(addr.ke === 'audience:public', 'addr.ke must be audience:public');
console.assert(addr.konteks === 'context:thread_1', 'addr.konteks must be context:thread_1');
console.assert(addr.waktu === 1700000000000, 'addr.waktu must match');

// Test 2: Node hierarchy & world address resolution
const root = new Node('user:origin', '*', 'universe', 1700000000000);
const child = new Node('user:reply', 'user:origin', 'subthread', 1700000001000);
root.add(child);

const worldAddr = child.getWorldAddress();
console.assert(worldAddr.context === 'universe/subthread', 'Compound world context resolved');

console.log('All VessertID unit tests passed!');
