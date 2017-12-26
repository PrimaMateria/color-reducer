import React from 'react';
import ColorTable from '../components/ColorTable'
import createDeltaEMatrice from '../lib/createDeltaEMatrice'
import reduce from '../lib/reduce'

const Home = function() {
  const colors = [
    '0066CC',
    '15428B',
    '204268',
    '333333',
    '3F3F3F',
    '444444',
    '455668',
    '477CCD',
    '4C4C4C',
    '4D4D4D',
    '666666',
    '6E809A',
    '808080',
    '8B8C8E',
    'AAAAAA',
    'ABABAB',
    'CCCCCC',
    'D9D9D9',
    'E41B17'
  ];

  const matrice = createDeltaEMatrice(colors);
  const reducedColors = reduce(colors);
  const reducedMatrice = createDeltaEMatrice(reducedColors);

  return (
    <div>
      <h2>Home Page</h2>
      <ColorTable colors={colors} matrice={matrice}/>
      <ColorTable colors={reducedColors} matrice={reducedMatrice}/>
    </div>
  );

}

export default Home;
