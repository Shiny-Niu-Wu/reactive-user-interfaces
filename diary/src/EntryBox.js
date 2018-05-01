import React, { Component } from 'react';
import './EntryBox.css';

class EntryBox extends Component {
  render() {
    return (
        <div className="box">
          <h2>{this.props.title}</h2>
          <div className="boxDate">{this.props.date}</div>
        </div>
    );
  }
}

export default EntryBox;
