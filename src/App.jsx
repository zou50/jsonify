import React, { Component } from 'react';
import './styles/App.css';

import JsonEditor from './JsonEditor.jsx';
import JsonResult from './JsonResult.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      objs: [],
    }
  }

  handleCallback(obj) {
    this.setState({
      objs: obj,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>JSONIFY</h2>
          <p className="desc">Online JSON Generator</p>
          <p className="subtitle">© 2017 Danny Zou</p>
        </div>
        <div className="appContainer">
          <div className="leftContainer">
            <JsonEditor handleCallback={this.handleCallback.bind(this)} />
          </div>
          <div className="rightContainer">
            <JsonResult objs={this.state.objs}/>
          </div>
        </div>
      </div>
    );
  }
}

