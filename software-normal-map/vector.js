const vector = (x, y, z) => ({ x, y, z });

const Zero    = () => vector( 0,  0,  0);

const Left     = () => vector(-1,  0,  0);
const Right    = () => vector( 1,  0,  0);
const Up       = () => vector( 0,  1,  0);
const Down     = () => vector( 0, -1,  0);
const Backward = () => vector( 0,  0,  1);
const Forward  = () => vector( 0,  0, -1);

const add = (v1, v2, v = Zero()) => {
  v.x = v1.x + v2.x;
  v.y = v1.y + v2.y;
  v.z = v1.z + v2.z;
  return v;
};

const subtract = (v1, v2, v = Zero()) => {
  v.x = v1.x - v2.x;
  v.y = v1.y - v2.y;
  v.z = v1.z - v2.z;
  return v;
};

const multiply = (v1, v2, v = Zero()) => {
  v.x = v1.x * v2.x;
  v.y = v1.y * v2.y;
  v.z = v1.z * v2.z;
  return v;
};

const scale = (v, factor, copy = Zero()) => {
  copy.x = v.x * factor;
  copy.y = v.y * factor;
  copy.z = v.z * factor;
  return copy;
};

const dot = (v1, v2) =>
    v1.x * v2.x
  + v1.y * v2.y
  + v1.z * v2.z;

const cross = (v1, v2, v = Zero()) => {
  const x = v1.y * v2.z - v1.z * v2.y;
  const y = v1.z * v2.x - v1.z * v2.x;
  const z = v1.x * v2.y - v1.y * v2.x;

  v.x = x;
  v.y = y;
  v.z = z;
  return v;
};

const magnitude = (v) => {
  const squaredLength = dot(v, v);
  return Math.sqrt(squaredLength);
};

const normalize = (v, copy = Zero()) => {
  const m = magnitude(v);
  const s = m === 0 ? 0 : 1/m;

  copy.x = v.x * s;
  copy.y = v.y * s;
  copy.z = v.z * s;
  return copy;
};

export const Vector = {
  add,
  subtract,
  multiply,
  scale,
  dot,
  cross,
  normalize,
  Zero,
  Up,
  Down,
  Left,
  Right,
  Forward,
  Backward
};