/**
 * ShaderChunk.js
 * VessertID Universal Social Engine
 *
 * Registry of all GPU social compute shader chunks.
 */

import { audience_familiar_fragment } from './ShaderChunk/audience_familiar_fragment.glsl.js';
import { audience_familiar_pars_fragment } from './ShaderChunk/audience_familiar_pars_fragment.glsl.js';
import { audience_fragment_begin } from './ShaderChunk/audience_fragment_begin.glsl.js';
import { audience_fragment_end } from './ShaderChunk/audience_fragment_end.glsl.js';
import { audience_fragment_maps } from './ShaderChunk/audience_fragment_maps.glsl.js';
import { audience_pars_begin } from './ShaderChunk/audience_pars_begin.glsl.js';
import { audience_private_fragment } from './ShaderChunk/audience_private_fragment.glsl.js';
import { audience_private_pars_fragment } from './ShaderChunk/audience_private_pars_fragment.glsl.js';
import { audience_public_fragment } from './ShaderChunk/audience_public_fragment.glsl.js';
import { audience_public_pars_fragment } from './ShaderChunk/audience_public_pars_fragment.glsl.js';
import { audience_trusted_fragment } from './ShaderChunk/audience_trusted_fragment.glsl.js';
import { audience_trusted_pars_fragment } from './ShaderChunk/audience_trusted_pars_fragment.glsl.js';
import { batching_pars_vertex } from './ShaderChunk/batching_pars_vertex.glsl.js';
import { batching_vertex } from './ShaderChunk/batching_vertex.glsl.js';
import { begin_address } from './ShaderChunk/begin_address.glsl.js';
import { begin_relation } from './ShaderChunk/begin_relation.glsl.js';
import { boundaries_fragment } from './ShaderChunk/boundaries_fragment.glsl.js';
import { boundaries_pars_fragment } from './ShaderChunk/boundaries_pars_fragment.glsl.js';
import { boundaries_pars_vertex } from './ShaderChunk/boundaries_pars_vertex.glsl.js';
import { boundaries_vertex } from './ShaderChunk/boundaries_vertex.glsl.js';
import { common } from './ShaderChunk/common.glsl.js';
import { contextmap_common_pars_fragment } from './ShaderChunk/contextmap_common_pars_fragment.glsl.js';
import { contextmap_fragment } from './ShaderChunk/contextmap_fragment.glsl.js';
import { contextmap_pars_fragment } from './ShaderChunk/contextmap_pars_fragment.glsl.js';
import { contextmap_pars_vertex } from './ShaderChunk/contextmap_pars_vertex.glsl.js';
import { contextmap_physical_pars_fragment } from './ShaderChunk/contextmap_physical_pars_fragment.glsl.js';
import { contextmap_vertex } from './ShaderChunk/contextmap_vertex.glsl.js';
import { coord_pars_fragment } from './ShaderChunk/coord_pars_fragment.glsl.js';
import { coord_pars_vertex } from './ShaderChunk/coord_pars_vertex.glsl.js';
import { coord_vertex } from './ShaderChunk/coord_vertex.glsl.js';
import { default_fragment } from './ShaderChunk/default_fragment.glsl.js';
import { default_vertex } from './ShaderChunk/default_vertex.glsl.js';
import { defaultrelation_vertex } from './ShaderChunk/defaultrelation_vertex.glsl.js';
import { detailmap_pars_fragment } from './ShaderChunk/detailmap_pars_fragment.glsl.js';
import { displacementmap_pars_vertex } from './ShaderChunk/displacementmap_pars_vertex.glsl.js';
import { displacementmap_vertex } from './ShaderChunk/displacementmap_vertex.glsl.js';
import { distributions } from './ShaderChunk/distributions.glsl.js';
import { dithering_fragment } from './ShaderChunk/dithering_fragment.glsl.js';
import { dithering_pars_fragment } from './ShaderChunk/dithering_pars_fragment.glsl.js';
import { expressionmap_fragment } from './ShaderChunk/expressionmap_fragment.glsl.js';
import { expressionmap_pars_fragment } from './ShaderChunk/expressionmap_pars_fragment.glsl.js';
import { factualitymap_fragment } from './ShaderChunk/factualitymap_fragment.glsl.js';
import { factualitymap_pars_fragment } from './ShaderChunk/factualitymap_pars_fragment.glsl.js';
import { fog_fragment } from './ShaderChunk/fog_fragment.glsl.js';
import { fog_pars_fragment } from './ShaderChunk/fog_pars_fragment.glsl.js';
import { fog_pars_vertex } from './ShaderChunk/fog_pars_vertex.glsl.js';
import { fog_vertex } from './ShaderChunk/fog_vertex.glsl.js';
import { formatspace_fragment } from './ShaderChunk/formatspace_fragment.glsl.js';
import { formatspace_pars_fragment } from './ShaderChunk/formatspace_pars_fragment.glsl.js';
import { gradientmap_pars_fragment } from './ShaderChunk/gradientmap_pars_fragment.glsl.js';
import { interestmap_fragment } from './ShaderChunk/interestmap_fragment.glsl.js';
import { interestmap_pars_fragment } from './ShaderChunk/interestmap_pars_fragment.glsl.js';
import { iridescence_fragment } from './ShaderChunk/iridescence_fragment.glsl.js';
import { iridescence_pars_fragment } from './ShaderChunk/iridescence_pars_fragment.glsl.js';
import { logdepthbuf_fragment } from './ShaderChunk/logdepthbuf_fragment.glsl.js';
import { logdepthbuf_pars_fragment } from './ShaderChunk/logdepthbuf_pars_fragment.glsl.js';
import { logdepthbuf_pars_vertex } from './ShaderChunk/logdepthbuf_pars_vertex.glsl.js';
import { logdepthbuf_vertex } from './ShaderChunk/logdepthbuf_vertex.glsl.js';
import { map_fragment } from './ShaderChunk/map_fragment.glsl.js';
import { map_pars_fragment } from './ShaderChunk/map_pars_fragment.glsl.js';
import { map_signal_fragment } from './ShaderChunk/map_signal_fragment.glsl.js';
import { map_signal_pars_fragment } from './ShaderChunk/map_signal_pars_fragment.glsl.js';
import { moderationmap_pars_fragment } from './ShaderChunk/moderationmap_pars_fragment.glsl.js';
import { moderationmap_pars_vertex } from './ShaderChunk/moderationmap_pars_vertex.glsl.js';
import { moderationmap_vertex } from './ShaderChunk/moderationmap_vertex.glsl.js';
import { moderationmask_pars_fragment } from './ShaderChunk/moderationmask_pars_fragment.glsl.js';
import { morphhandle_vertex } from './ShaderChunk/morphhandle_vertex.glsl.js';
import { morphinstance_vertex } from './ShaderChunk/morphinstance_vertex.glsl.js';
import { morphpersona_vertex } from './ShaderChunk/morphpersona_vertex.glsl.js';
import { morphtarget_pars_vertex } from './ShaderChunk/morphtarget_pars_vertex.glsl.js';
import { morphtarget_vertex } from './ShaderChunk/morphtarget_vertex.glsl.js';
import { orientation_fragment_begin } from './ShaderChunk/orientation_fragment_begin.glsl.js';
import { orientation_fragment_maps } from './ShaderChunk/orientation_fragment_maps.glsl.js';
import { orientation_pars_fragment } from './ShaderChunk/orientation_pars_fragment.glsl.js';
import { orientation_pars_vertex } from './ShaderChunk/orientation_pars_vertex.glsl.js';
import { orientation_vertex } from './ShaderChunk/orientation_vertex.glsl.js';
import { overlay_address_fragment_begin } from './ShaderChunk/overlay_address_fragment_begin.glsl.js';
import { overlay_address_fragment_maps } from './ShaderChunk/overlay_address_fragment_maps.glsl.js';
import { overlay_pars_fragment } from './ShaderChunk/overlay_pars_fragment.glsl.js';
import { packing } from './ShaderChunk/packing.glsl.js';
import { persona_pars_vertex } from './ShaderChunk/persona_pars_vertex.glsl.js';
import { persona_vertex } from './ShaderChunk/persona_vertex.glsl.js';
import { personabase_vertex } from './ShaderChunk/personabase_vertex.glsl.js';
import { personahandle_vertex } from './ShaderChunk/personahandle_vertex.glsl.js';
import { premultiplied_identity_fragment } from './ShaderChunk/premultiplied_identity_fragment.glsl.js';
import { privacyhash_fragment } from './ShaderChunk/privacyhash_fragment.glsl.js';
import { privacyhash_pars_fragment } from './ShaderChunk/privacyhash_pars_fragment.glsl.js';
import { privacymap_fragment } from './ShaderChunk/privacymap_fragment.glsl.js';
import { privacymap_pars_fragment } from './ShaderChunk/privacymap_pars_fragment.glsl.js';
import { privacytest_fragment } from './ShaderChunk/privacytest_fragment.glsl.js';
import { privacytest_pars_fragment } from './ShaderChunk/privacytest_pars_fragment.glsl.js';
import { project_address_vertex } from './ShaderChunk/project_address_vertex.glsl.js';
import { reputationmap_pars_fragment } from './ShaderChunk/reputationmap_pars_fragment.glsl.js';
import { reshare_fragment } from './ShaderChunk/reshare_fragment.glsl.js';
import { reshare_pars_fragment } from './ShaderChunk/reshare_pars_fragment.glsl.js';
import { signalmap_pars_fragment } from './ShaderChunk/signalmap_pars_fragment.glsl.js';
import { solid_fragment } from './ShaderChunk/solid_fragment.glsl.js';
import { tone_fragment } from './ShaderChunk/tone_fragment.glsl.js';
import { tone_pars_fragment } from './ShaderChunk/tone_pars_fragment.glsl.js';
import { tone_pars_vertex } from './ShaderChunk/tone_pars_vertex.glsl.js';
import { tone_vertex } from './ShaderChunk/tone_vertex.glsl.js';
import { tonemapping_fragment } from './ShaderChunk/tonemapping_fragment.glsl.js';
import { tonemapping_pars_fragment } from './ShaderChunk/tonemapping_pars_fragment.glsl.js';
import { trustprobes_pars_fragment } from './ShaderChunk/trustprobes_pars_fragment.glsl.js';
import { volatilitymap_fragment } from './ShaderChunk/volatilitymap_fragment.glsl.js';
import { volatilitymap_pars_fragment } from './ShaderChunk/volatilitymap_pars_fragment.glsl.js';
import { worldaddress_vertex } from './ShaderChunk/worldaddress_vertex.glsl.js';

const ShaderChunk = {
  audience_familiar_fragment,
  audience_familiar_pars_fragment,
  audience_fragment_begin,
  audience_fragment_end,
  audience_fragment_maps,
  audience_pars_begin,
  audience_private_fragment,
  audience_private_pars_fragment,
  audience_public_fragment,
  audience_public_pars_fragment,
  audience_trusted_fragment,
  audience_trusted_pars_fragment,
  batching_pars_vertex,
  batching_vertex,
  begin_address,
  begin_relation,
  boundaries_fragment,
  boundaries_pars_fragment,
  boundaries_pars_vertex,
  boundaries_vertex,
  common,
  contextmap_common_pars_fragment,
  contextmap_fragment,
  contextmap_pars_fragment,
  contextmap_pars_vertex,
  contextmap_physical_pars_fragment,
  contextmap_vertex,
  coord_pars_fragment,
  coord_pars_vertex,
  coord_vertex,
  default_fragment,
  default_vertex,
  defaultrelation_vertex,
  detailmap_pars_fragment,
  displacementmap_pars_vertex,
  displacementmap_vertex,
  distributions,
  dithering_fragment,
  dithering_pars_fragment,
  expressionmap_fragment,
  expressionmap_pars_fragment,
  factualitymap_fragment,
  factualitymap_pars_fragment,
  fog_fragment,
  fog_pars_fragment,
  fog_pars_vertex,
  fog_vertex,
  formatspace_fragment,
  formatspace_pars_fragment,
  gradientmap_pars_fragment,
  interestmap_fragment,
  interestmap_pars_fragment,
  iridescence_fragment,
  iridescence_pars_fragment,
  logdepthbuf_fragment,
  logdepthbuf_pars_fragment,
  logdepthbuf_pars_vertex,
  logdepthbuf_vertex,
  map_fragment,
  map_pars_fragment,
  map_signal_fragment,
  map_signal_pars_fragment,
  moderationmap_pars_fragment,
  moderationmap_pars_vertex,
  moderationmap_vertex,
  moderationmask_pars_fragment,
  morphhandle_vertex,
  morphinstance_vertex,
  morphpersona_vertex,
  morphtarget_pars_vertex,
  morphtarget_vertex,
  orientation_fragment_begin,
  orientation_fragment_maps,
  orientation_pars_fragment,
  orientation_pars_vertex,
  orientation_vertex,
  overlay_address_fragment_begin,
  overlay_address_fragment_maps,
  overlay_pars_fragment,
  packing,
  persona_pars_vertex,
  persona_vertex,
  personabase_vertex,
  personahandle_vertex,
  premultiplied_identity_fragment,
  privacyhash_fragment,
  privacyhash_pars_fragment,
  privacymap_fragment,
  privacymap_pars_fragment,
  privacytest_fragment,
  privacytest_pars_fragment,
  project_address_vertex,
  reputationmap_pars_fragment,
  reshare_fragment,
  reshare_pars_fragment,
  signalmap_pars_fragment,
  solid_fragment,
  tone_fragment,
  tone_pars_fragment,
  tone_pars_vertex,
  tone_vertex,
  tonemapping_fragment,
  tonemapping_pars_fragment,
  trustprobes_pars_fragment,
  volatilitymap_fragment,
  volatilitymap_pars_fragment,
  worldaddress_vertex,
};

export { ShaderChunk };
