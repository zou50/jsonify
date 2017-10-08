import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/JsonObject.css';

export default class JsonObject extends Component {
  render() {
    return (
      <div className="jsonObject">
        <span className="objectLeft">
          {this.props.obj.left}
        </span>
        <span className="objectGap"></span>
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
