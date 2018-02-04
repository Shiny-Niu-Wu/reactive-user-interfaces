import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {


    const name = "Shiny";
    const showName = true;

    return (
     <div className="App">
     
     Hello {name}

     <p>{name || false}</p>

     </div>
    );
  }
}

export default App;
