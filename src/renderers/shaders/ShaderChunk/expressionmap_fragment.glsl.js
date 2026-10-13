/**
 * expressionmap_fragment.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const expressionmap_fragment = /* glsl */`#if defined( USE_EXPRESSIONMAP )
  vec4 exprTexel = texture2D( expressionMap, vCoord );
  socialOutput.rgb += exprTexel.rgb * exprIntensity;
#endif`;

export { expressionmap_fragment };
