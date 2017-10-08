import React, { Component } from 'react';

const tabSpace = "\xa0\xa0";

export default class JsonResult extends Component {
  renderResult() {
    let buffer = [];
    for (var i = 0; i < this.props.objs.length; i++) {
      var obj = this.props.objs[i];
      buffer.push(
      <span key={obj._id}>
        {tabSpace}"{obj.left}": "{obj.right}"
        {i === this.props.objs.length - 1 ? 
        "" : <span>,<br/></span>}
      </span>
      );
    }
    return buffer;
  }

  render() {
    return (
      <div className="jsonResult">
        <code>JSON Result</code>
        <div className="textArea">
          <code id="jsonResult">&#123;<br />{this.renderResult()}<br />&#125;</code>
        </div>
      </div>
    );
  }
}
