/**
 * UniformsUtils.js
 * VessertID Universal Social Engine
 */

const UniformsUtils = {
  clone: function (uniforms_src) {
    const uniforms_dst = {};
    for (const u in uniforms_src) {
      uniforms_dst[u] = {};
      for (const p in uniforms_src[u]) {
        const parameter_src = uniforms_src[u][p];
        if (parameter_src && typeof parameter_src.clone === 'function') {
          uniforms_dst[u][p] = parameter_src.clone();
        } else if (Array.isArray(parameter_src)) {
          uniforms_dst[u][p] = parameter_src.slice();
        } else {
          uniforms_dst[u][p] = parameter_src;
        }
      }
    }
    return uniforms_dst;
  },

  merge: function (uniforms) {
    const merged = {};
    for (let u = 0; u < uniforms.length; u++) {
      const tmp = this.clone(uniforms[u]);
      for (const p in tmp) {
        merged[p] = tmp[p];
      }
    }
    return merged;
  }
};

export { UniformsUtils };
