import React, { Component } from 'react';
import './Banner.css';
import addIcon from './pics/add.png';
import sideIcon from './pics/sidelist.svg';

class Banner extends Component {
  constructor(props){
    super(props);
    this.state={
      open: false,
      show: false
    };
    this.toggle=this.toggle.bind(this);
    this.onClick=this.onClick.bind(this);
    this.showModal=this.showModal.bind(this);
    this.closeModal=this.closeModal.bind(this);
  }

  toggle(){
    this.setState({
      open: !this.state.open
    });
  }

  onClick(){
    this.props.onClick();
  }

  showModal(){
    this.setState({
      show: true
    });
  }

  closeModal(){
    this.setState({
      show: false
    });
  }

  render() {
    let sideBarClass = "sideBarHide";
    if (this.state.open===true){
      sideBarClass = "sideBarShow";
    }

    let modalClass = "hideModal";
    if (this.state.show===true) {
      modalClass = "showModal";
    }

    return (
      <div className="Banner">
        <p className="title">Besties</p>

        <div className={modalClass}>
          <div className="modal-content">
            <span className="close" onClick={this.closeModal}>&times;</span>
            <div className="addContact">Add Contact</div>
          </div>
        </div>

        <img className="addIcon" src={addIcon} onClick={this.showModal} />

        <div className={sideBarClass}>
          <div className="sortByName">
            <p className="sortBy">Sort by </p>
            <button onClick={this.onClick} className="sort">
              {this.props.sortBy}
            </button>
            <p className="byName"> Name</p>
          </div>

          <div className="sortByCountry">
            <p className="country">Country</p>
            {this.props.countries}
          </div>
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
