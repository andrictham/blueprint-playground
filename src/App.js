import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as Blueprint from "@blueprintjs/core";
import { Table, Column } from "@blueprintjs/table";

import NavBar from './NavBar';

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      tableRows: 2,
      slidervalue: 1
    }
  }
  addRow () {
    var currentNumRows = this.state.tableRows;
    this.setState({
      tableRows: currentNumRows += 1
    });
  }
  clearRows () {
    this.setState({
      tableRows: 0
    });
  }
  getChangeHandler(key){
    return (value) => this.setState ({[key]: value});
  }
  renderLabel(val){
    return val === 0 ? `$${val}` : `$${val},000`;
  }
  render() {
    return (
      <div className="App">
        <NavBar />
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
        <div className="App-header">
          <Blueprint.Button iconName="add" text="Add Row" intent={Blueprint.Intent.PRIMARY} onClick={this.addRow.bind(this)} />
          <Blueprint.Button iconName="remove" text="Clear Rows" intent={Blueprint.Intent.DANGER} onClick={this.clearRows.bind(this)} />
        </div>
        <p className="App-intro">
          <Table numRows={this.state.tableRows}>
              <Column />
              <Column />
              <Column />
          </Table>
        </p>
      </div>
    );
  }
}

export default App;
