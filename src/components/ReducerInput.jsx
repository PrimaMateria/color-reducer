import React from 'react'
import hexColorRegex from 'hex-color-regex'
import './_ReducerInput.scss'

class ReducerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorsString: "",
      maxDistance: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();

    let colors = this.state.colorsString.match(/\S+/g) || [];
    if (colors.length > 0) {
      let invalidColors = [];
      for (let i in colors) {
        if (!hexColorRegex().test(colors[i])) {
          invalidColors.push(colors[i]);
        }
      }

      if (invalidColors.length > 0) {
        alert('Invalid colors: ' + invalidColors);
      } else {
        this.props.onInputChange(colors, parseInt(this.state.maxDistance));
      }

    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Hex colors (separated with whitespace)
          <br/>
          <textarea name="colorsString" value={this.state.colorsString} onChange={this.handleChange}/>
        </label>
        <br/>
        <br/>
        <label>
          Maximal deltaE distance between colors:&nbsp;
          <input name="maxDistance" type="number" value={this.state.maxDistance} onChange={this.handleChange} min="0"/>
        </label>
        <br/>
        <br/>
        <input type="submit" value="Reduce"/>
      </form>
    )
  }

}

export default ReducerInput;
