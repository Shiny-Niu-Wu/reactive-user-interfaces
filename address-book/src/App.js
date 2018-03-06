import React, { Component } from 'react';
import './App.css';
import Banner from './Banner.js';
import Profile from './Profile.js';
import Favorite from './Favorite.js';
import List from './List.js';
import contactPic from './pics/contact.png';
import search from './pics/searchIcon.png';
import goTop from './pics/goTop.svg';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      search: " ",
      searchBar: false,
      intervalid: 0,
      scrollStepInPx: "50",
      delayInMs: "16"
    };
    this.Search=this.Search.bind(this);
    this.showSearchBar=this.showSearchBar.bind(this);
    this.scrollStep=this.scrollStep.bind(this);
    this.scrollToTop=this.scrollToTop.bind(this);
  }

  Search(e){
    this.setState({
      search: e.target.value
    });
  }

  showSearchBar(){
    this.setState({
      searchBar: !this.state.searchBar
    });
  }

  //scrollToTop functions code from https://codepen.io/Qbrid/pen/GjVvwL

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalid);
    }
    window.scroll(0, window.pageYOffset - this.state.scrollStepInPx);
  }

  scrollToTop() {
    let intervalid = setInterval(this.scrollStep.bind(this), this.state.delayInMs);
    this.setState({ intervalid: intervalid });
  }

  // let goTopClass = "goTopHide";
  // Scrolling(){
  //     if (document.body.scrollTop > 0) {
  //       goTopClass += "goTopShow";
  //     }
  // }

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

    let listCopy = listNames.slice();

    if(this.state.search != " "){
      listCopy = listCopy.filter((name) => {
        const searching = this.state.search.toLowerCase();
        const firstName = name.first.toLowerCase();
        const lastName = name.last.toLowerCase();
        return firstName.match(searching) || lastName.match(searching);
      });
    }

    const listAll = listCopy.map((name, i) => {
      return(
        <div key={i} className="listing">
          <div className="firstName">{name.first}</div>
          <img src={contactPic} className="contactPic"/>
          <div className="lastName">{name.last}</div>
        </div>
      );
    });

    let searchIconClass = "searchPic";
    let searchBarClass = "searchBarHide";
    if (this.state.searchBar===true) {
      searchIconClass += " searchAnimation";
      searchBarClass += " searchBarShow";
    }

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
        <input
          type="text"
          placeholder="Search"
          className={searchBarClass}
          onChange={this.Search}
        />
        <div className="search" />
        <img className={searchIconClass} src={search} onClick={this.showSearchBar}/>
        <img src={goTop} className="goTop" />
        <div className="scroll"
          onClick={this.scrollToTop}>
          {this.state.scrollStepInPx}
          {this.state.delayInMs}
        </div>
      </div>
    );
  }
}

export default App;
