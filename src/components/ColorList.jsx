import React from 'react';
import './_ColorList.scss'

class ColorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clusters: props.clusters
    }
  }

  render() {
    let clusters = this.state.clusters;
    let rows = [];
    for (let i in clusters) {
      let cluster = clusters[i];

      if (cluster.length > 1) {
        let colors = [];
        for (let j in cluster) {
          let color = cluster[j];

          let previewStyle = {
            backgroundColor: '#' + color
          };

          colors.push(
            <div key={color}>
              <div className="preview" style={previewStyle}></div>
              <div className="name">{color}</div>
            </div>
          );
        }
        rows.push(
          <div key={"cluster" + i}>
            <h3>Cluster {i}</h3>
            {colors}
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

export default ColorList;
