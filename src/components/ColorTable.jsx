import React from 'react';

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

    return (
      <table>
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
    for (const i in this.state.colors) {
      let color = this.state.colors[i];
      cells.push(<td key={color}>#{color}</td>);
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
      for (const i in this.state.colors) {
        let color = this.state.colors[i];
        let cellStyle = {
          backgroundColor: color
        }
        cells.push(<td key={color} className="previewCell" style={cellStyle}></td>);
      }

      return (
        <tr>
          {cells}
        </tr>
      );
    }
}

export default ColorTable;
