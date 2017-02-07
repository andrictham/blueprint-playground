import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as Blueprint from "@blueprintjs/core";

class SliderExample extends Component {
  constructor (props) {
    super (props);

    this.state = {
      slidervalue: 1
    }
  }
  getChangeHandler(key){
    return (value) => this.setState ({[key]: value});
  }
  renderLabel(val){
    return val === 0 ? `$${val}` : `$${val},000`;
  }
  render() {
    return (
      <div className="App-header slider">
        <Blueprint.Slider
                  min={1}
                  max={100}
                  stepSize={1}
                  labelStepSize={99}
                  onChange={this.getChangeHandler("slidervalue")}
                  renderLabel={this.renderLabel}
                  value={this.state.slidervalue}
              />
      </div>
    );
  }
}

export default SliderExample;
