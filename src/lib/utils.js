import chroma from 'chroma-js'

function getDistance(a, b) {
  return chroma.deltaE(a, b);
}

function mix(colors = []) {
  return chroma.average(colors).hex();
}

export {
  getDistance,
  mix
}
