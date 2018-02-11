import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props){
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked(name){
    this.props.onClick(this.props.name);
  }

  render() {
    return (
      <button onClick={this.clicked} className="Button">
        {this.props.name}
      </button>
    );
  }
}

export default Button;
