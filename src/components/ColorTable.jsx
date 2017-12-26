import React from 'react';
import './_ColorTable.scss'

class ColorTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: props.colors,
      matrice: props.matrice
    }
  }

  render() {
    let tbody = [];
    tbody.push(<HeaderNameRow key="nameX" colors={this.state.colors}/>);
    tbody.push(<HeaderPreviewRow key="previewX" colors={this.state.colors}/>);

    for (const x in this.state.matrice) {
      tbody.push(
        <Row
          key={x}
          color={this.state.colors[x]}
          distances={this.state.matrice[x]}
          />);
    }

    return (
      <table className="colorTable">
        <tbody>
          {tbody}
        </tbody>
      </table>
    );
  }

}

class HeaderNameRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: props.colors
    }
  }

  render() {
    let cells = [];
    cells.push(<td key="dummyNameX"/>);
    cells.push(<td key="dummyPreviewX"/>);

    for (const i in this.state.colors) {
      let color = this.state.colors[i];
      cells.push(<NameCell key={"name-x-"+color} color={color}/>);
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
      this.state = {
        colors: props.colors
      }
    }

    render() {
      let cells = [];
      cells.push(<td key="dummyNameX"/>);
      cells.push(<td key="dummyPreviewX"/>);

      for (const i in this.state.colors) {
        let color = this.state.colors[i];

        cells.push(<PreviewCell key={"preview-x-"+color} color={color}/>);
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
    this.state = {
      color: props.color
    }
  }

  render() {
    let color = this.state.color;
    let cellStyle = {
      backgroundColor: '#' + color
    };

    return (<td className="previewCell" style={cellStyle} ></td>);
  }
}

class NameCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color
    }
  }

  render() {
    let color = this.state.color;
    return (<td>#{color}</td>);
  }
}

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
      distances: props.distances,
      minimum: props.minimum
    }
  }

  render() {
    let cells = [];
    let color = this.state.color;
    let distances = this.state.distances;
    let minimum = this.state.minimum;

    cells.push(<NameCell key={"name-y-"+color} color={color}/>);
    cells.push(<PreviewCell key={"preview-y-"+color} color={color}/>);

    for (const i in distances) {
      let distance = distances[i];

      let distanceClass;
      if (distance < 10) {
         distanceClass = "lowDistance";
      }

      cells.push(
        <td
          key={i}
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
