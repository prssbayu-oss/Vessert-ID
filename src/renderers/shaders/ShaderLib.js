/**
 * ShaderLib.js
 * VessertID Universal Social Engine
 *
 * Pre-compiled shader program library for social computation and rendering.
 */

import { signalfeed } from './ShaderLib/signalfeed.glsl.js';
import { signalpublic } from './ShaderLib/signalpublic.glsl.js';
import { signalprivate } from './ShaderLib/signalprivate.glsl.js';
import { signaltrusted } from './ShaderLib/signaltrusted.glsl.js';
import { signalmoderated } from './ShaderLib/signalmoderated.glsl.js';
import { signalreputation } from './ShaderLib/signalreputation.glsl.js';
import { signaldecayed } from './ShaderLib/signaldecayed.glsl.js';
import { cluster } from './ShaderLib/cluster.glsl.js';
import { timeline } from './ShaderLib/timeline.glsl.js';
import { visibility } from './ShaderLib/visibility.glsl.js';
import { edgelinked } from './ShaderLib/edgelinked.glsl.js';
import { point } from './ShaderLib/point.glsl.js';
import { background } from './ShaderLib/background.glsl.js';
import { backgroundContext } from './ShaderLib/backgroundContext.glsl.js';
import { depth } from './ShaderLib/depth.glsl.js';
import { distance } from './ShaderLib/distance.glsl.js';
import { equaladdress } from './ShaderLib/equaladdress.glsl.js';
import { identity } from './ShaderLib/identity.glsl.js';
import { moderation } from './ShaderLib/moderation.glsl.js';

const ShaderLib = {
  signalfeed,
  signalpublic,
  signalprivate,
  signaltrusted,
  signalmoderated,
  signalreputation,
  signaldecayed,
  cluster,
  timeline,
  visibility,
  edgelinked,
  point,
  background,
  backgroundContext,
  depth,
  distance,
  equaladdress,
  identity,
  moderation,
};

export { ShaderLib };
