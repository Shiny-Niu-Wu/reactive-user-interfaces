import React, { Component } from 'react';
import './Profile.css';
import dropdownIcon from './pics/dropdown.png';
import dropupIcon from './pics/dropup.png';
import contactPic from './pics/contact.png';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
      open: true
    };
    this.toggle=this.toggle.bind(this);
  }

  toggle(){
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    let imgSrc = dropdownIcon;
    let collapsePro = "collapsePro";
    if (this.state.open===true){
      collapsePro += ' in';
      imgSrc = dropupIcon;
    }

    return (
      <div className="Profile">
        <p className="category">Profile</p>
        <img src={imgSrc} alt={imgSrc} className="dropImage" onClick={this.toggle}/>
          <div className={collapsePro}>
            <div className="listing">
              <div className="firstName">Shiny</div>
              <img src={contactPic} alt={contactPic} className="profilePic"/>
              <div className="lastName">Wu</div>
            </div>
          </div>
      </div>
    );
  }
}

export default Profile;
