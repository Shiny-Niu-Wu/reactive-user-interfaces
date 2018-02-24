import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  constructor(props){
    super(props);
    this.onChange=this.onChange.bind(this);
  }

  onChange(e){
    let txt = e.target.value;
    this.props.onChange(this.props.label, txt);
  }

  render() {
    return (
      <div className="Input">
        <h3 className="label">{this.props.label}</h3>
        <input
          className="inputBox"
          type="text"
          placeholder={this.props.placeholder}
          onChange={this.onChange}
        />

      </div>
    );
  }
}

export default Input;
