import React from 'react';
import './_ColorList.scss'

class ColorList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let clusters = this.props.clusters;
    console.log(clusters);

    let rows = [];
    for (let i in clusters) {
      let cluster = clusters[i];

      if (cluster.length > 1) {
        let colors = [];
        for (let j in cluster) {
          let color = cluster[j];

          let previewStyle = {
            backgroundColor: color
          };

          colors.push(
            <div key={color}>
              <div className="preview" style={previewStyle}></div>
              <div className="name">{color}</div>
            </div>
          );
        }
        rows.push(
          <div key={"cluster" + i} className="card">
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
