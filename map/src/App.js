import React, { Component } from 'react';
import './App.css';
import Button from './Button'

class App extends Component {
  render() {
    const labels = ["Button 1", "Button 2", "Button 3"];
    const paragraphs = labels.map((item, num) => {
      return <p key = {num}>{item}</p>
    });

    return (
      <div className="App">
        {paragraphs}
      </div>
    );
  }
}

export default App;
