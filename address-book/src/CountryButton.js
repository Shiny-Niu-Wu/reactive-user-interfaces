import React, { Component } from 'react';
import './CountryButton.css';

class Button extends Component {
  constructor(props){
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked(country){
    this.props.onClick(this.props.country);
  }

  render() {
    let classes = 'button';
    if (this.props.active === this.props.country) {
      classes += ' active';
    }

    return (
      <div className="Button">
        <button className={classes} onClick={this.clicked}>{this.props.country}</button>
      </div>
    );
  }
}

export default Button;
