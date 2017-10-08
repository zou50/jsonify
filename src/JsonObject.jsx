import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/JsonObject.css';

export default class JsonObject extends Component {
  handleRemove() {
    this.props.handleRemove(this.props.obj);
  }

  render() {
    return (
      <div className="jsonObject">
        <span className="objectLeft">
          {this.props.obj.left}
        </span>
        <span className="objectGap" onClick={this.handleRemove.bind(this)}>
          X
        </span>
        <span className="objectRight">
          {this.props.obj.right}
        </span>
      </div>
    );
  }
}

JsonObject.propTypes = {
  obj: PropTypes.object.isRequired,
}
