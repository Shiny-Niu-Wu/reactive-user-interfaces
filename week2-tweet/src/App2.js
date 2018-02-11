import React, { Component } from 'react';
import Tweet from './Tweet.js';
import './App.css';

class App extends Component {
  render() {
    return (
     <div className="App">
     <Tweet tweetText="First Tweet" />
     <Tweet tweetText="Second Tweet" />
     <Tweet tweetText="Third Tweet" />

     </div>
    );
  }
}

export default App;