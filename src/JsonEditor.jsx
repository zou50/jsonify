import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import './styles/JsonEditor.css';

import JsonObject from './JsonObject.jsx';

export default class JsonEditor extends Component {
  constructor() {
    super();
    this.state = {
      objs: [],
      showInput: false,
    }
  }

  showInput(e) {
    e.preventDefault();
    this.setState({showInput: !this.state.showInput});
  }

  addObject(e) {
    e.preventDefault();

    const leftField = ReactDOM.findDOMNode(this.refs.leftInput).value.trim();
    const rightField = ReactDOM.findDOMNode(this.refs.rightInput).value.trim();

    if (!leftField || !rightField) 
      return;

    this.state.objs.push( {_id: uuid.v4(), left: leftField, right: rightField} );
    this.setState({objs: this.state.objs});
    this.props.handleCallback(this.state.objs);

    ReactDOM.findDOMNode(this.refs.leftInput).value = "";
    ReactDOM.findDOMNode(this.refs.rightInput).value = "";
    ReactDOM.findDOMNode(this.refs.leftInput).focus();
  }  

  removeObject(obj) {
    console.log(obj);
    for (let i = 0; i < this.state.objs.length; i++) {
      if (this.state.objs[i]._id === obj._id) {
        this.state.objs.splice(i, 1);
      }
    }
    this.forceUpdate();
    this.props.handleCallback(this.state.objs);
  }

  renderObjects() {
    return this.state.objs.map((object) => (
      <JsonObject handleRemove={this.removeObject.bind(this)} key={object._id} obj={object} />
    ));
  }

  componentDidUpdate() {
    if (this.state.showInput) {
      ReactDOM.findDOMNode(this.refs.leftInput).focus();
    }
  }

  render() {
    return (
      <div className="editor">
        <button className="addJsonObjectButton" onClick={this.showInput.bind(this)}>
        Add JSON Object
        </button>
        <div style={{display: this.state.showInput === true ? 'block' : 'none'}}>
          <form className="inputForm" onSubmit={this.addObject.bind(this)}>
            <input type="text" ref="leftInput"></input>
            <input type="text" ref="rightInput"></input>
            <input type="submit" value="Add" />
          </form>
        </div>
        {this.renderObjects()}
      </div>
    );
  }
}

