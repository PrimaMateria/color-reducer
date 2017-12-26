import Math from 'math'
import cluster from 'hierarchical-clustering'
import {getDistance, mix} from './utils'

function linkage(distances) {
  let min = Math.min.apply(null, distances);
  return min;
}

function reduce(colors, maxDistance = 10) {
  let levels = cluster({
    input: colors,
    distance: getDistance,
    linkage: linkage,
    maxLinkage: maxDistance
  });

  let clusters = levels[levels.length - 1].clusters;

  clusters = clusters.map(function(cluster) {
    return cluster.map(function(index) {
      return colors[index];
    });
  });
  console.log(clusters);

  return blend(clusters);
}

function blend(clusters) {
  let blended = []
  for (let i in clusters) {
    let cluster = clusters[i];
    blended.push(mix(cluster));
  }
  return blended;
}

export default reduce;
