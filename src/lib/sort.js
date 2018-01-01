import chroma from 'chroma-js'
import math from 'math'

// step sorting
// https://www.alanzucconi.com/2015/09/30/colour-sorting/

function sort(colors) {
  return colors.sort(compare);
}

function compare(color1, color2) {
  let key1 = key(color1, 8);
  let key2 = key(color2, 8);

  let deltaH = key1.h - key2.h;
  if (deltaH === 0) {
    let deltaLum = key1.lum - key2.lum;
    if (deltaLum === 0) {
      return key1.v - key2.v;
    }
    return deltaLum
  }
  return deltaH;
}

function key(color, repetitions = 1) {
  let rgb = chroma(color).rgb();
  let r = rgb[0];
  let g = rgb[1];
  let b = rgb[2];

  let hsv = chroma(color).hsv();
  let h = isNaN(hsv[0]) ? -1 : hsv[0];
  let s = hsv[1];
  let v = hsv[2];

  let key = {
    h: parseInt(h * repetitions),
    lum: math.sqrt(.241 * r + .691 * g + .068 * b),
    v: parseInt(v * repetitions)
  }

  return key;
}

export default sort;
