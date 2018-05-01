import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Button.css';

class Button extends Component {
  constructor(props){
    super(props);
    this.state={
      animating: false,
      showBox: false
    };
    this.toggleBox=this.toggleBox.bind(this);
    this.reset=this.reset.bind(this);
  }

  toggleBox(){
    this.setState({
      animating: true,
      showBox: !this.state.showBox
    });
  }

  reset(){
    this.setState({
      animating: false
    });
  }

  render() {
    let classes = this.state.animating ? "button animating" : "button";

    return (
      <div className="Button">
        <button className={classes} onClick={this.toggleBox} onAnimationEnd={this.reset}>Click me!</button>
        <CSSTransition in={this.state.showBox} timeout={500} classNames="box" unmountOnExit>
          <div className="box">NOW YOU SEE ME</div>
        </CSSTransition>
      </div>
    );
  }
}

export default Button;
