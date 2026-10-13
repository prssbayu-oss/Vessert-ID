/**
 * common.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const common = /* glsl */`#define PI 3.141592653589793
#define RECIPROCAL_PI 0.3183098861837907
#define EPSILON 1e-6

// VessertID Universal Social Engine - Mathematical Core Functions
float sigmoid( float x ) {
  return 1.0 / ( 1.0 + exp( -x ) );
}

float clamp01( float x ) {
  return clamp( x, 0.0, 1.0 );
}

// Social Attention & Signal Decay based on half-life (Delta Time in seconds)
float calculateSocialDecay( float deltaTime, float halfLife ) {
  if ( halfLife <= 0.0 ) return 1.0;
  return exp( -0.69314718056 * deltaTime / halfLife );
}

// Cosine similarity between two contextual embedding vectors
float contextSimilarity( vec4 a, vec4 b ) {
  float dotProduct = dot( a, b );
  float normProduct = length( a ) * length( b ) + EPSILON;
  return dotProduct / normProduct;
}

// Hash for pseudo-random social diffusion and zero-knowledge privacy verification
float hashSocial( vec2 p ) {
  vec3 p3 = fract( vec3( p.xyx ) * 0.1031 );
  p3 += dot( p3, p3.yzx + 33.33 );
  return fract( ( p3.x + p3.y ) * p3.z );
}

// Universal 4D Social Address representation
struct SocialAddress {
  vec4 coords;    // x: fromActor, y: toActor, z: contextPlane, w: timestamp
  float weight;   // relational weight / edge strength
  int layer;      // audience bitmask layer
};`;

export { common };
