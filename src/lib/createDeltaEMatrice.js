import {getDistance} from './utils'

function createDeltaEMatrice(colors = []) {
  let matrice = [];

  for (const x in colors) {
    matrice[x] = [];
    for (let y=0; y<x; y++) {
      matrice[x][y] = getDistance(colors[x], colors[y]);
    }
  }

  return matrice;
}

export default createDeltaEMatrice;
