import React, { Component } from 'react';
import './Banner.css';
import addIcon from './pics/add.png';
import sideIcon from './pics/sidelist.svg';
import contactPic from './pics/contact.png';

class Banner extends Component {
  constructor(props){
    super(props);
    this.state={
      open: false,
      show: false,
      first: '',
      last: '',
      nickName: '',
      bday: '',
      phone: '',
      email: '',
      address: '',
      country: '',
      note: ''
    };
    this.toggle=this.toggle.bind(this);
    this.onClick=this.onClick.bind(this);
    this.showModal=this.showModal.bind(this);
    this.closeModal=this.closeModal.bind(this);
    this.showAllCountry=this.showAllCountry.bind(this);
    this.addContact=this.addContact.bind(this);

    this.changeFirstName=this.changeFirstName.bind(this);
    this.changeLastName=this.changeLastName.bind(this);
    this.changeNickName=this.changeNickName.bind(this);
    this.changeEmail=this.changeEmail.bind(this);
    this.changePhone=this.changePhone.bind(this);
    this.changeBirthday=this.changeBirthday.bind(this);
    this.changeNotes=this.changeNotes.bind(this);
    this.changeAddress=this.changeAddress.bind(this);
    this.changeCountry=this.changeCountry.bind(this);
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

  showAllCountry(){
    this.props.showAllCountry();
  }

  addContact(){
    this.props.addContact(this.state.first,this.state.last,this.state.nickName,this.state.bday,this.state.phone,this.state.email,this.state.address,this.state.note);
    this.setState({
      first: '',
      last: '',
      nickName: '',
      bday: '',
      phone: '',
      email: '',
      address: '',
      note: ''
    });
  }

  changeFirstName(e){
    this.setState({
      first: e.target.value
    });
  }

  changeLastName(e){
    this.setState({
      last: e.target.value
    });
  }

  changeNickName(e){
    this.setState({
      nickName: e.target.value
    });
  }

  changeBirthday(e){
    this.setState({
      bday: e.target.value
    });
  }

  changePhone(e){
    this.setState({
      phone: e.target.value
    });
  }

  changeEmail(e){
    this.setState({
      email: e.target.value
    });
  }

  changeAddress(e){
    this.setState({
      address: e.target.value
    });
  }

  changeCountry(e){
    this.setState({
      country: e.target.value
    });
  }

  changeNotes(e){
    this.setState({
      note: e.target.value
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
            Add Contact
            <div className="listing addContact">
              <input value={this.state.first} className="inputFirst" placeholder="first name" onChange={this.changeFirstName}></input>
              <img src={contactPic} alt={contactPic} className="contactNorm" />
              <input value={this.state.last} className="inputLast" placeholder="last name" onChange={this.changeLastName}></input>
            </div>
            <div className="detail">
              <input value={this.state.nickName} className="inputNickname" placeholder="nickname" onChange={this.changeNickName}></input>
              <input value={this.state.bday} className="inputBirthday" placeholder="birthday" onChange={this.changeBirthday}></input>
              <input value={this.state.phone} className="inputPhone" placeholder="phone number" onChange={this.changePhone}></input>
              <input value={this.state.email} className="inputEmail" placeholder="email" onChange={this.changeEmail}></input>
              <input value={this.state.address} className="inputAddress" placeholder="address" onChange={this.changeAddress}></input>
              <input value={this.state.country} className="inputCountry" placeholder="country" onChange={this.changeCountry}></input>
              <input value={this.state.note} className="inputNotes" placeholder="notes" onChange={this.changeNotes}></input>
              <div className="confirm">
                <button className="confirmButton" onClick={this.addContact}>Confirm</button>
              </div>
            </div>
          </div>
        </div>

        <img className="addIcon" src={addIcon} alt={addIcon} onClick={this.showModal} />

        <div className={sideBarClass}>
          <div className="sortByName">
            <p className="sortBy">SORT BY</p>
            <button onClick={this.onClick} className="sort">
              {this.props.sortBy}
            </button>
            <p className="byName"> Name</p>
          </div>

          <hr className="line" />

          <div className="sortByCountry">
            <p className="country">Country</p>
            <button className="allCountry" onClick={this.showAllCountry}>All</button>
            <div className="countryList">{this.props.countries}</div>
          </div>
        </div>

        <img className="sideIcon" src={sideIcon} alt={sideIcon} onClick={this.toggle} />
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
