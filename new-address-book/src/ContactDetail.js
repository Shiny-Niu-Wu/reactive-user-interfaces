import React, { Component } from 'react';
import './ContactDetail.css';
import contactPic from './pics/contact.png';
import address from './pics/address.png';
import email from './pics/email.png';
import phone from './pics/phone.png';
import cake from './pics/cake.png';

class ContactDetail extends Component {
  constructor(props){
    super(props);
    this.state={
      fav: false
    }

    this.addFav=this.addFav.bind(this);
  }

  addFav(i){
    this.setState({
      fav: !this.state.fav
    });
    this.props.addFav(i);
  }

  render() {
    let star = "notFav";
    let whiteStar = "blockStar";
    let blackStar = "noneStar";
    let contactIcon = "contactNorm";
    if (this.state.fav===true && this.props.active===this.props.contact) {
      star = "isFav";
      whiteStar = "noneStar";
      blackStar = "blockStar";
      contactIcon = "contactFav";
    }

    return (
      <div className="ContactDetail">

        <div className="Contact">
            <div className="firstName">{this.props.firstName}</div>
            <img src={contactPic} alt={contactPic} className={contactIcon}/>
            <div className="lastName">{this.props.lastName}</div>
        </div>

        <div className={star} onClick={this.addFav} label={this.props.contact}>
          <p className={whiteStar}>&#9734;</p>
          <p className={blackStar}>&#9733;</p>
        </div>

        <div className="contactInfo">
          <div className="nickName">( {this.props.nickName} )</div>
          <div><img src={cake} alt={cake} className="cake"></img>{this.props.bday}</div>
          <div><img src={phone} alt={phone} className="phone"></img>{this.props.phone}</div>
          <div><img src={email} alt={email} className="email"></img>{this.props.email}</div>
          <div><img src={address} alt={address} className="address"></img>{this.props.address}, {this.props.country}</div>
          <div>Notes: <span className="note">{this.props.note}</span></div>
        </div>

      </div>
    );
  }
}

export default ContactDetail;
