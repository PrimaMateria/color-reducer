import React from 'react';
import './_ColorList.scss'
import {mix} from '../lib/utils'

class ColorList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let clusters = this.props.clusters;

    let rows = [];
    for (let i in clusters) {
      let cluster = clusters[i];

      if (cluster.length > 1) {
        let colors = [];

        for (let j in cluster) {
          let color = cluster[j];
          colors.push(ColorDiv(color, i+'-'+j));
        }

        let resultColor = ColorDiv(mix(cluster), i);

        rows.push(
          <div key={"cluster" + i} className="card">
            <h3>Cluster {i}</h3>
            {colors}
            <hr />
            {resultColor}
          </div>
        );
      }
    }

    return (
      <div>
        {rows}
      </div>
    );
  }
}

function ColorDiv(color, key) {

  let previewStyle = {
    backgroundColor: color
  };

  return <div key={color}>
    <div className="preview" key={'preview-'+key} style={previewStyle}></div>
    <div className="name" key={'name-'+key}>{color}</div>
  </div>
}

export default ColorList;
