const setPixel = (buffer, x, y, color) => {
  const pixelWidth = 4;
  const rows = buffer.height;
  const columns = buffer.width;

  const row = (rows - y - 1) * columns;
  const column = x;
  const i = pixelWidth * (row + column);

  buffer.data[i + 0] = color.r;
  buffer.data[i + 1] = color.g;
  buffer.data[i + 2] = color.b;
  buffer.data[i + 3] = 255;
};

// todo: make an actual gamma curve
const gammaCurve = (color) => color;

const clampColor = (color, max = 1, min = 0) => {
  color.r = clampValue(min, color.r, max);
  color.g = clampValue(min, color.g, max);
  color.b = clampValue(min, color.b, max);
  return color;
};

const clampValue = (min, x, max) =>
  Math.min(max, Math.max(x, min));

const convertToBitWidth = (color, power = 8) => {
  const scale = 2 ** power;
  // these should be a copy...
  color.r = color.r * scale;
  color.g = color.g * scale;
  color.b = color.b * scale;
  // this should be a copy
  return color;
};

export const Render = {
  setPixel,
  gammaCurve,
  clampColor,
  convertToBitWidth,
};