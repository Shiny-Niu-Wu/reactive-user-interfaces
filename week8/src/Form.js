import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);

    this.state={
      name: '',
      email: ''
    };
    this.changeName=this.changeName.bind(this);
    this.changeEmail=this.changeEmail.bind(this);
    this.addContact=this.addContact.bind(this);
  }

  changeName(e){
    this.setState({
      name: e.target.value
    });
  }

  changeEmail(e){
    this.setState({
      email: e.target.value
    });
  }

  addContact(){
    this.props.addContact(this.state.name, this.state.email);
    this.setState({
      name: '',
      email: ''
    });
  }


  render() {

    return (
      <div className="Form">
        <input
          value={this.state.name}
          type="text"
          placeholder="Name"
          onChange={this.changeName}
        />
        <input
          value={this.state.email}
          type="email"
          placeholder="Email"
          onChange={this.changeEmail}
        />
        <button onClick={this.addContact}>Add Contact</button>
      </div>
    );
  }
}

export default Form;
