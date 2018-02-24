import React, { Component } from "react";
import "./Poster.css";

class Poster extends Component {
  render() {
    return (
      <div className="Poster">
        <div className={this.props.className}>{this.props.display}</div>
      </div>
    );
  }
}

export default Poster;
