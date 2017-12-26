import {mix} from './utils'

function blend(colorClusters) {
  let blended = []
  for (let i in colorClusters) {
    let cluster = colorClusters[i];
    blended.push(mix(cluster));
  }
  return blended;
}

export default blend;
