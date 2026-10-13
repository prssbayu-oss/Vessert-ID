export const Utils = {
  clamp: (v, min, max) => Math.max(min, Math.min(max, v)),
  lerp: (x, y, t) => (1 - t) * x + t * y,
  now: () => Date.now()
};
export default Utils;
