/**
 * distributions.glsl.js
 * VessertID Universal Social Engine Chunk
 */

const distributions = /* glsl */`// Pareto Power-Law distribution for virality and feed engagement dynamics
float paretoEngagement( float rank, float alpha, float k ) {
  if ( rank < k ) return 1.0;
  return pow( k / max( rank, EPSILON ), alpha );
}

// Barabasi-Albert preferential attachment probability
float preferentialAttachment( float degree, float totalDegree ) {
  return degree / max( totalDegree, 1.0 );
}

// Epidemic SIR-based viral reach propagation factor
float epidemicSpread( float beta, float gamma, float t ) {
  float r0 = beta / max( gamma, EPSILON );
  return clamp01( 1.0 - exp( -r0 * t ) );
}`;

export { distributions };
