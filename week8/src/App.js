import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      contacts: [
        {name: "p1", email: "p1@nyu.edu"},
        {name: "p2", email: "p2@nyu.edu"},
        {name: "p3", email: "p3@nyu.edu"},
      ]
    };
    this.addContact=this.addContact.bind(this);
  }

  addContact(name, email){
    let copy = this.state.contacts.slice();
    copy.push({
      name: name,
      email: email
    });
    this.setState({
      contacts: copy
    });
  }

  render() {
    const list = this.state.contacts.map(p => <p key={p.email}>{p.name} - {p.email}</p>);

    return (
      <div className="App">
        <h1>The List</h1>
        {list}
        <Form
          addContact={this.addContact}
        />
      </div>
    );
  }
}

export default App;
