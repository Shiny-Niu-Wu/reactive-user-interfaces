import React, { Component } from 'react';
import './Banner.css';
import addIcon from './pics/add.png';
import sideIcon from './pics/sidelist.svg';

class Banner extends Component {
  constructor(props){
    super(props);
    this.state={
      open: false
    };
    this.toggle=this.toggle.bind(this);
    this.onClick=this.onClick.bind(this);
  }

  toggle(){
    this.setState({
      open: !this.state.open
    });
  }

  onClick(){
    this.props.onClick();
  }

  render() {
    let sideBarClass = "sideBarHide";
    if (this.state.open===true){
      sideBarClass = "sideBarShow";
    }

    return (
      <div className="Banner">
        <p className="title">APPNAME</p>
        <img className="addIcon" src={addIcon} />
        <div className={sideBarClass}>
          <button onClick={this.onClick} className="sort">
            {this.props.sortBy}
          </button>
        </div>
        <img className="sideIcon" src={sideIcon} onClick={this.toggle} />
      </div>
        // <button id="demo-menu-lower-left"
        // className="mdl-button mdl-js-button mdl-button--icon">
        //   <i className="material-icons">more_vert</i>
        // </button>
        //
        // <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
        // htmlFor="demo-menu-lower-left">
        //   <li className="mdl-menu__item">Some Action</li>
        //   <li className="mdl-menu__item mdl-menu__item--full-bleed-divider">Another Action</li>
        //   <li disabled className="mdl-menu__item">Disabled Action</li>
        //   <li className="mdl-menu__item">Yet Another Action</li>
        // </ul>

    );
  }
}

export default Banner;
