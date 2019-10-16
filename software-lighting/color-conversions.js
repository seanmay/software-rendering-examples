const RGBToHSL = (red, green, blue) => {
  const bitWidth = 255;
  const r = red / bitWidth;
  const g = green / bitWidth;
  const b = blue / bitWidth;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;

  const hue = calculateHue(r, g, b, max, delta);
  const luminance = calculateLuminance(min, max);
  const saturation = calculateSaturation(delta, luminance);

  return {
    h: hue,
    s: saturation * 100,
    l: luminance * 100
  };
};

const calculateHue = (r, g, b, max, delta) => {
  if (delta === 0) return 0;

  const circle = [r, g, b];
  const offsets = [0, 2, 4];
  const leadIndex =
    r === max
      ? 0
      : g === max
        ? 1
        : b === max
          ? 2 : 0;

  const forward = circle[(leadIndex + 1) % 3];
  const backward = circle[(leadIndex + 2) % 3];
  const offset = offsets[leadIndex];

  const result = (((forward - backward) / delta) + offset) % 6;
  const degrees = Math.round(result * 60);

  const hue = degrees < 0 ? degrees + 360 : degrees;
  return hue;
};

const calculateLuminance = (min, max) => ((max + min) / 2);

const calculateSaturation = (delta, luminance) =>
  delta / (1 - Math.abs(2 * luminance - 1));


export const ColorConversions = {
  RGBtoHSL
};