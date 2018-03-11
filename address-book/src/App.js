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
      sortByFirst: true,
      sortBy: "First",
      searchBar: false,
      intervalid: 0,
      scrollStepInPx: "50",
      delayInMs: "16",
      index: " ",
      fav: false
    };
    this.Search=this.Search.bind(this);
    this.showSearchBar=this.showSearchBar.bind(this);
    this.scrollStep=this.scrollStep.bind(this);
    this.scrollToTop=this.scrollToTop.bind(this);
    this.sortByName=this.sortByName.bind(this);
    this.contactIconFav=this.contactIconFav.bind(this);
    // this.handleClick=this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   // listen to scroll
  //     // check whether the document is scrolled
  //       // YES: setState  showButton: true
  //       // NO: setState: showButton: false
  // }

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

  //scrollToTop functions modified from code from https://codepen.io/Qbrid/pen/GjVvwL

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

  sortByName(){
    this.setState({
      sortByFirst: !this.state.sortByFirst
    });
  }

  handleClick(i){
    console.log(i);
    this.setState({
      index: i
    });
  }

  contactIconFav(){
    this.setState({
      fav: !this.state.fav
    });
  }

  render() {
    const listNames = [
      { first: "Bob", last: "Penguin",
        phone: "00000000",
        email: "bp@nyu.edu",
        address: "Pearl Tower",
        country: "China"
      },
      { first: "Amy", last: "Bird",
        phone: "11111111",
        email: "ab@nyu.edu",
        address: "NYU Shanghai",
        country: "China"
      },
      { first: "Dylan", last: "Fox",
        phone: "22222222",
        email: "df@nyu.edu",
        address: "Big Ben",
        country: "UK"
      },
      { first: "Tiger", last: "Tiger",
        phone: "33333333",
        email: "tt@nyu.edu",
        address: "Statue of Liberty",
        country: "US"
      },
      { first: "Papa", last: "Elephant",
        phone: "44444444",
        email: "pe@nyu.edu",
        address: "Hollywood",
        country: "US"
      },
      { first: "Mama", last: "Dinosaur",
        phone: "55555555",
        email: "md@nyu.edu",
        address: "NYU",
        country: "US"
      },
      { first: "George", last: "Sheep",
        phone: "66666666",
        email: "gs@nyu.edu",
        address: "Tiananmen",
        country: "China"
      },
      { first: "Mary", last: "Hippo",
        phone: "77777777",
        email: "mh@nyu.edu",
        address: "The Great Wall",
        country: "China"
      },
      { first: "Sam", last: "Cockroach",
        phone: "88888888",
        email: "sc@nyu.edu",
        address: "The White House",
        country: "US"
      },
      { first: "Kiko", last: "Human",
        phone: "99999999",
        email: "kh@nyu.edu",
        address: "Panda's Home",
        country: "China"
      },
    ];

    //default should be in alphabetical order

    let listCopy = listNames.slice();

    if (this.state.sortByFirst===true) {
      listCopy = listCopy.sort((firstA, firstB) =>
        firstA.first > firstB.first,
        this.state.sortBy = "Last"
      );
    } else if (this.state.sortByFirst===false) {
      listCopy = listCopy.sort((lastA, lastB) =>
        lastA.last > lastB.last,
        this.state.sortBy = "First"
      );
    }

    if(this.state.search != " "){
      listCopy = listCopy.filter((name) => {
        const searching = this.state.search.toLowerCase();
        const firstName = name.first.toLowerCase();
        const lastName = name.last.toLowerCase();
        const fullName = firstName + " " + lastName;
        const phone = name.phone.toLowerCase();
        const email = name.email.toLowerCase();
        const address = name.address.toLowerCase();
        const country = name.country.toLowerCase();
        return fullName.match(searching) || phone.match(searching) || email.match(searching) || address.match(searching) || country.match(searching);
      });
    }

    let contactIcon = "contactNorm";
    if (this.state.fav===true) {
      contactIcon = "contactFav";
    }

    const listAll = listCopy.map((name, i) => {
      return(
        <div key={i} className="listing" onClick={this.handleClick.bind(this, i)}>
          <div className="firstName">{name.first}</div>
          <img src={contactPic} className={contactIcon}/>
          <div className="lastName">{name.last}</div>
        </div>
      );
    });

    const listContactInfo = listCopy.map((info, i) => {
      return(
        <div key={i}>
          <div>{info.phone}</div>
          <div>{info.email}</div>
          <div>{info.address}</div>
          <div>{info.country}</div>
        </div>
      );
    });

    let countryNames = [...new Set(listCopy)];


    const countryMap = countryNames.map((country, i) => {
      return(
        <div key={i}>
          <div>{country.country}</div>
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
        <Banner
          onClick={this.sortByName}
          sortBy={this.state.sortBy}
          countries={countryMap}
        />
        <Profile />
        <hr />
        <Favorite
          listName={listAll}
          mustShow={this.state.search !== " "}
        />
        <hr />
        <List
          listName={listAll}
          mustShow={this.state.search !== " "}
          contactName={listAll[this.state.index]}
          contactInfo={listContactInfo[this.state.index]}
          addFav={this.contactIconFav}
        />
        <div className="searchBG" />
        <input
          type="text"
          placeholder="Search Name/Info"
          className={searchBarClass}
          onChange={this.Search}
        />
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
