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
      tableRows: 2
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
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          <Blueprint.Button iconName="add" text="Add Row" onClick={this.addRow.bind(this)} />
          <Blueprint.Button iconName="remove" text="Clear Rows" onClick={this.clearRows.bind(this)} />
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
