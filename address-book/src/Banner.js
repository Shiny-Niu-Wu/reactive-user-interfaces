import React, { Component } from 'react';
import './Banner.css';
import addIcon from './pics/add.png';

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <p className="title">APPNAME</p>
        <img className="addIcon" src={addIcon} />
      </div>
    );
  }
}

export default Banner;
