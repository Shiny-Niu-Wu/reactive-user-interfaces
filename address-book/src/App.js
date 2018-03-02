import React, { Component } from 'react';
import './App.css';
import Banner from './Banner.js';
import Profile from './Profile.js';
import List from './List.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Profile />
        <List />
      </div>
    );
  }
}

export default App;
