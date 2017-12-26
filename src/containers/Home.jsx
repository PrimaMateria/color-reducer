import React from 'react';
import ColorTable from '../components/ColorTable'
import ColorList from '../components/ColorList'
import createDeltaEMatrice from '../lib/createDeltaEMatrice'
import reduce from '../lib/reduce'
import blend from '../lib/blend'

const Home = function() {
  const colors = [
    '#0066CC',
    '#15428B',
    '#204268',
    '#333333',
    '#3F3F3F',
    '#444444',
    '#455668',
    '#477CCD',
    '#4C4C4C',
    '#4D4D4D',
    '#666666',
    '#6E809A',
    '#808080',
    '#8B8C8E',
    '#AAAAAA',
    '#ABABAB',
    '#CCCCCC',
    '#D9D9D9',
    '#E41B17'
  ];

  const maxDistance = 3;
  const matrice = createDeltaEMatrice(colors);

  let clusters = reduce(colors, maxDistance);

  const reducedColors = blend(clusters);
  const reducedMatrice = createDeltaEMatrice(reducedColors);

  return (
    <div>
      <h2>Original pallete</h2>
      <ColorTable colors={colors} matrice={matrice} maxDistance={maxDistance}/>
      <h2>Merged colors</h2>
      <ColorList clusters={clusters}/>
      <h2>Reduced pallete</h2>
      <ColorTable className="center" colors={reducedColors} matrice={reducedMatrice} maxDistance={maxDistance}/>
    </div>
  );

}

export default Home;
