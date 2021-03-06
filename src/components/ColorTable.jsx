import React from 'react';
import './_ColorTable.scss'

class ColorTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tbody = [];
    tbody.push(<HeaderNameRow key="nameX" colors={this.props.colors}/>);
    tbody.push(<HeaderPreviewRow key="previewX" colors={this.props.colors}/>);

    for (const x in this.props.colors) {
      tbody.push(
        <Row
          key={x}
          rownum={x}
          color={this.props.colors[x]}
          distances={this.props.matrice[x]}
          maxDistance={this.props.maxDistance}
          />);
    }

    return (
      <div>
        <span>Colors count: {this.props.colors.length}</span>
        <table className="colorTable">
          <tbody>
            {tbody}
          </tbody>
        </table>
      </div>
    );
  }

}

class HeaderNameRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cells = [];
    cells.push(<td key="dummyNameX"/>);
    cells.push(<td key="dummyPreviewX"/>);

    for (const i in this.props.colors) {
      let color = this.props.colors[i];
      cells.push(<NameCell key={"name-x-"+color+"-"+i} color={color}/>);
    }

    return (
      <tr>
        {cells}
      </tr>
    );
  }
}

class HeaderPreviewRow extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      let cells = [];
      cells.push(<td key="dummyNameX"/>);
      cells.push(<td key="dummyPreviewX"/>);

      for (const i in this.props.colors) {
        let color = this.props.colors[i];

        cells.push(<PreviewCell key={"preview-x-"+color+"-"+i} color={color}/>);
      }

      return (
        <tr>
          {cells}
        </tr>
      );
    }
}

class PreviewCell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let color = this.props.color;
    let cellStyle = {
      backgroundColor: color
    };

    return (<td className="previewCell" style={cellStyle} ></td>);
  }
}

class NameCell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let color = this.props.color;
    return (<td>{color}</td>);
  }
}

class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cells = [];
    let color = this.props.color;
    let distances = this.props.distances;
    let rownum = this.props.rownum;

    cells.push(<NameCell key={"name-y-"+color+"-"+rownum} color={color}/>);
    cells.push(<PreviewCell key={"preview-y-"+color+"-"+rownum} color={color}/>);

    for (const i in distances) {
      let distance = distances[i];

      let distanceClass;
      if (distance < this.props.maxDistance) {
         distanceClass = "lowDistance";
      }

      cells.push(
        <td
          key={i+"-"+rownum}
          className={distanceClass}>
          {distances[i].toFixed(2)}
        </td>)
    }

    return (
      <tr>
        {cells}
      </tr>
    );
  }
}

export default ColorTable;
