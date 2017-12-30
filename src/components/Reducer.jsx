import React from 'react';
import ColorTable from './ColorTable'
import ColorList from './ColorList'
import ReducerInput from './ReducerInput'
import createDeltaEMatrice from '../lib/createDeltaEMatrice'
import reduce from '../lib/reduce'
import blend from '../lib/blend'

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
    this.state.matrice = createDeltaEMatrice(colors);
    this.state.clusters = reduce(colors, maxDistance);

    this.state.reducedColors = blend(this.state.clusters);
    this.state.reducedMatrice = createDeltaEMatrice(this.state.reducedColors);

    this.setState({colors, maxDistance});
  }

  render() {
    let colors = this.state.colors;
    let maxDistance = this.state.maxDistance;

    let report;

    if (colors != undefined && colors.length != 0 && maxDistance != undefined) {
      report = (
        <div>
          <h2>Original pallete</h2>
          <ColorTable colors={this.state.colors} matrice={this.state.matrice} maxDistance={maxDistance}/>
          <h2>Merged colors</h2>
          <ColorList clusters={this.state.clusters}/>
          <h2>Reduced pallete</h2>
          <ColorTable colors={this.state.reducedColors} matrice={this.state.reducedMatrice} maxDistance={maxDistance}/>
        </div>
      )
    }

    return (
      <div>
        <h2>Input</h2>
        <ReducerInput onInputChange={this.handleInputChange}/>
        {report}
      </div>
    );
  }

}

export default Reducer;
