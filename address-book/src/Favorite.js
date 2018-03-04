import React, { Component } from 'react';
import './Profile.css';
import dropdownIcon from './pics/dropdown.png';
import dropupIcon from './pics/dropup.png';
import contactPic from './pics/contact.png';

class Favorite extends Component {
  constructor(props){
    super(props);
    this.state={
      open: false
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
    let collapseFav = "collapsePro";
    if (this.state.open===true){
      collapseFav += ' in';
      imgSrc = dropupIcon;
    }

    return (
      <div className="Favorite">
        <p className="category">Favorites</p>
        <img src={imgSrc} className="dropImage" onClick={this.toggle}/>
        <div className={collapseFav}>{this.props.listName}</div>
      </div>
    );
  }
}

export default Favorite;
