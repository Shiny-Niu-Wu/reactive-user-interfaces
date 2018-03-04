import React, { Component } from 'react';
import './App.css';
import Banner from './Banner.js';
import Profile from './Profile.js';
import Favorite from './Favorite.js';
import List from './List.js';
import contactPic from './pics/contact.png';

class App extends Component {
  render() {
    const listNames = [
      {first: "Bob", last: "Banana"},
      {first: "Amy", last: "Banana"},
      {first: "Dylan", last: "Banana"},
      {first: "Tiger", last: "Banana"},
      {first: "Papa", last: "Banana"},
      {first: "Mama", last: "Banana"},
      {first: "George", last: "Banana"},
      {first: "Mary", last: "Banana"},
      {first: "Sam", last: "Banana"},
      {first: "Kiko", last: "Banana"},
    ];

    //default should be in alphabetical order

    const listAll = listNames.map((name, i) => {
      return(
        <div key={i} className="listing">
          <div className="firstName">{name.first}</div>
          <img src={contactPic} className="contactPic"/>
          <div className="lastName">{name.last}</div>
        </div>
      );
    });

    return (
      <div className="App">
        <Banner />
        <Profile />
        <hr />
        <Favorite
          listName={listAll}
        />
        <hr />
        <List
          listName={listAll}
        />
      </div>
    );
  }
}

export default App;
