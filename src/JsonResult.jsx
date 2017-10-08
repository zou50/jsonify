import React, { Component } from 'react';

const tabSpace = "\xa0\xa0";

export default class JsonResult extends Component {
  downloadFile = () => {
    let elem = document.createElement("a");
    let file = new Blob([document.getElementById('jsonResult').innerText], {type:'text/plain'});
    elem.href = URL.createObjectURL(file);
    elem.download = "result.json";
    elem.click();
  }

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
        <button onClick={this.downloadFile.bind(this)}>Download</button>
        <code>JSON Result</code>
        <div className="textArea">
          <code id="jsonResult">{"{"}<br/>{this.renderResult()}<br/>{"}"}</code>
        </div>
      </div>
    );
  }
}
