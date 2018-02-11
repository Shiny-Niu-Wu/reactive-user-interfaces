import React, { Component } from 'react';
import './ResultBox.css';

class ResultBox extends Component {
  render() {
    return(
      <div className="ResultBox">
        <p className="result">You have selected: {this.props.result}</p>
      </div>
    );
  }
}

export default ResultBox;
