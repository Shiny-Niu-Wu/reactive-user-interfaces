import React, { Component } from 'react';
import './Contact.css';
import contactPic from './pics/contact.png';

class Contact extends Component {
  constructor(props){
    super(props);

    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(contact){
    this.props.handleClick(contact);
  }

  render() {
    return (
      <div className="Contact" onClick={this.handleClick}>
          <div className="firstName">{this.props.firstName}</div>
          <img src={contactPic} alt={contactPic} className={this.props.contactIcon}/>
          <div className="lastName">{this.props.lastName}</div>
      </div>
    );
  }
}

export default Contact;
