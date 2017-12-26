import chroma from 'chroma-js'

function getDistance(a, b) {
  return chroma.deltaE(a, b);
}

function mix(colors = []) {
  let mixed = chroma.average(colors).hex();
  return mixed.substr(1, mixed.length - 1);
}

export {
  getDistance,
  mix
}
