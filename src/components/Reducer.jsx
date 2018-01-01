import React from 'react';
import ColorTable from './ColorTable'
import ColorList from './ColorList'
import ReducerInput from './ReducerInput'
import createDeltaEMatrice from '../lib/createDeltaEMatrice'
import reduce from '../lib/reduce'
import blend from '../lib/blend'
import sort from '../lib/sort'

class Reducer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxDistance: 0,
      colors: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(colors, maxDistance) {

    let sortedColors = sort(colors);
    let matrice = createDeltaEMatrice(sortedColors);
    let clusters = reduce(sortedColors, maxDistance);
    let reducedColors = sort(blend(clusters));
    let reducedMatrice = createDeltaEMatrice(reducedColors);

    this.setState({
      colors: sortedColors,
      maxDistance: maxDistance,
      matrice: matrice,
      clusters: clusters,
      reducedColors: reducedColors,
      reducedMatrice: reducedMatrice
    });
  }

  render() {
    let colors = this.state.colors;
    let maxDistance = this.state.maxDistance;

    let report;

    if (colors != undefined && colors.length != 0 && maxDistance != undefined) {
      report = (
        <div>
          <h2>Original palette</h2>
          <ColorTable colors={this.state.colors} matrice={this.state.matrice} maxDistance={maxDistance}/>
          <h2>Merged colors</h2>
          <ColorList clusters={this.state.clusters}/>
          <h2>Reduced palette</h2>
          <ColorTable colors={this.state.reducedColors} matrice={this.state.reducedMatrice} maxDistance={maxDistance}/>
        </div>
      )
    }

    return (
      <div>
        <h2>Input</h2>
        <ReducerInput onInputChange={this.handleInputChange}/> {report}
      </div>
    );
  }

}

export default Reducer;
