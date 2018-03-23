import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    let stringState = localStorage.getItem('contactData');
    if (stringState) {
      this.state = JSON.parse(stringState);
    } else {
      this.state = {
        contacts: []
      }
    }

    this.addContact = this.addContact.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  addContact(){
    let copy = this.state.contacts.slice();
    copy.push(
      {
        name: "Shiny",
        email: "shiny@gmail.com",
        id: copy.length
      }
    );
    this.setState({
      contacts: copy
    });
  }

  clearAll(){
    this.setState({
      contacts: []
    });
  }

  componentDidUpdate(){
    const stringState = JSON.stringify(this.state);
    localStorage.setItem('contactData', stringState);
  }

  render() {
    const list = this.state.contacts.map(contact =>
      <p key={contact.id}>
        {contact.name} - {contact.email}
      </p>
    );

    return (
      <div className="App">
        <h2>The List</h2>
        {list}
        <button onClick={this.addContact}>Add Contact</button>
        <button onClick={this.clearAll}>Clear All</button>
      </div>
    );
  }
}

export default App;
