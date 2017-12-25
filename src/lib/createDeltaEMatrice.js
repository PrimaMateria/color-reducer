import Math from 'math'
import DeltaE from 'delta-e'
import convert from 'color-convert'

function createDeltaEMatrice(colors = []) {
  let matrice = [];

  for (const x in colors) {
    let converted = convert.hex.lab(colors[x]);
    let colorxLab = {
      L: converted[0],
      A: converted[1],
      B: converted[2]
    };
    matrice[x] = [];

    for (const y in colors) {
      let converted = convert.hex.lab(colors[y]);
      let coloryLab = {
        L: converted[0],
        A: converted[1],
        B: converted[2]
      };
      matrice[x][y] = DeltaE.getDeltaE00(colorxLab, coloryLab);
    }
  }

  return matrice;
}

export default createDeltaEMatrice;
