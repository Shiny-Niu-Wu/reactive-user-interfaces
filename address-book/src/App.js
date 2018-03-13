import React, { Component } from 'react';
import Scroll from 'react-scroll';
import './App.css';
import Banner from './Banner.js';
import Button from './Button.js';
import Profile from './Profile.js';
import Favorite from './Favorite.js';
import List from './List.js';
import contactPic from './pics/contact.png';
import address from './pics/address.png';
import email from './pics/email.png';
import phone from './pics/phone.png';
import cake from './pics/cake.png';
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
      showScroll: null,
      delayInMs: "16",
      index: " ",
      country: "",
      showAll: false,
      fav: false
    };
    this.Search=this.Search.bind(this);
    this.showSearchBar=this.showSearchBar.bind(this);
    this.scrollStep=this.scrollStep.bind(this);
    this.scrollToTop=this.scrollToTop.bind(this);
    this.handleScroll=this.handleScroll.bind(this);
    this.sortByName=this.sortByName.bind(this);
    this.contactIconFav=this.contactIconFav.bind(this);
    this.buttonClicked=this.buttonClicked.bind(this);
    this.showAllCountry=this.showAllCountry.bind(this);
  }

  componentWillMount(){
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      showScroll: "scrollHide"
    });
  }

  componentDidMount() {
    window.removeEventListener('scroll', this.handleScroll);
    this.setState({
      showScroll: "scrollShow"
    });
  }

  handleScroll() {
    window.scrollTo(0, 0);
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

  buttonClicked(country){
    this.setState({
      country: country,
      active: country,
      showAll: false
    });
  }

  showAllCountry(){
    this.setState({
      showAll: true,
      active: ""
    });
  }

  render() {
    const listNames = [
      { first: "Bob", last: "Penguin",
        nickName: "Bob-Ball Tea",
        bday: "10/10, 1997",
        phone: "00000000",
        email: "bp@nyu.edu",
        address: "Pearl Tower",
        country: "China",
        note: "Childhood Friend"
      },
      { first: "Amy", last: "Bird",
        nickName: "Ayy",
        bday: "11/11, 1997",
        phone: "11111111",
        email: "ab@nyu.edu",
        address: "NYU Shanghai",
        country: "China",
        note: "Childhood Friend"
      },
      { first: "Dylan", last: "Fox",
        nickName: "Fox",
        bday: "12/22, 1997",
        phone: "22222222",
        email: "df@nyu.edu",
        address: "Big Ben",
        country: "UK",
        note: "Childhood Friend"
      },
      { first: "Tiger", last: "Tiger",
        nickName: "Woods",
        bday: "03/13, 1997",
        phone: "33333333",
        email: "tt@nyu.edu",
        address: "Statue of Liberty",
        country: "US",
        note: "Childhood Friend"
      },
      { first: "Papa", last: "Elephant",
        nickName: "Circus Afro",
        bday: "04/04, 1997",
        phone: "44444444",
        email: "pe@nyu.edu",
        address: "Hollywood",
        country: "US",
        note: "Childhood Friend"
      },
      { first: "Mama", last: "Dinosaur",
        nickName: "Roar",
        bday: "05/05, 1997",
        phone: "55555555",
        email: "md@nyu.edu",
        address: "NYU",
        country: "US",
        note: "Childhood Friend"
      },
      { first: "George", last: "Sheep",
        nickName: "Baaa",
        bday: "06/06, 1997",
        phone: "66666666",
        email: "gs@nyu.edu",
        address: "Tiananmen",
        country: "China",
        note: "Childhood Friend"
      },
      { first: "Mary", last: "Hippo",
        nickName: "Hipopcorn",
        bday: "07/07, 1997",
        phone: "77777777",
        email: "mh@nyu.edu",
        address: "The Great Wall",
        country: "China",
        note: "Childhood Friend"
      },
      { first: "Sam", last: "Cockroach",
        nickName: "Cocky",
        bday: "08/08, 1997",
        phone: "88888888",
        email: "sc@nyu.edu",
        address: "The White House",
        country: "US",
        note: "Childhood Friend"
      },
      { first: "Kiko", last: "Human",
        nickName: "Homo Sapiens",
        bday: "09/09, 1997",
        phone: "99999999",
        email: "kh@nyu.edu",
        address: "Panda's Home",
        country: "China",
        note: "Childhood Friend"
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

    let countryNames = [];

    const countryMap = listCopy.map((country, i) => {
      countryNames.push(country.country);
    });

    countryNames =  [...new Set(countryNames)];

    if(this.state.search != " "){
      listCopy = listCopy.filter((name) => {
        const searching = this.state.search.toLowerCase();
        const firstName = name.first.toLowerCase();
        const lastName = name.last.toLowerCase();
        const fullName = firstName + " " + lastName;
        const nickname = name.nickName.toLowerCase();
        const bday = name.bday.toLowerCase();
        const phone = name.phone.toLowerCase();
        const email = name.email.toLowerCase();
        const address = name.address.toLowerCase();
        const country = name.country.toLowerCase();
        return fullName.match(searching) || nickname.match(searching) || bday.match(searching) || phone.match(searching) || email.match(searching) || address.match(searching) || country.match(searching);
      });
    }

    let contactIcon = "contactNorm";
    if (this.state.fav===true) {
      contactIcon = "contactFav";
    }

    if (this.state.showAll===false && this.state.country != "") {
      listCopy = listCopy.filter((list) => {
        const countryName = this.state.country;
        const country = list.country;
        return country.match(countryName);
      });
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
        <div key={i} className="info">
          <div className="nickName">( {info.nickName} )</div>
          <div><img src={cake} className="cake"></img>{info.bday}</div>
          <div><img src={phone} className="phone"></img>{info.phone}</div>
          <div><img src={email} className="email"></img>{info.email}</div>
          <div><img src={address} className="address"></img>{info.address}, {info.country}</div>
          <div>Notes: <span className="note">{info.note}</span></div>
        </div>
      );
    });

    const countryMapMap = countryNames.map((country, i) => {
      return(
        <div className="sortCountry">
            <Button
              onClick = {this.buttonClicked}
              country = {country}
              active = {this.state.active}
            />
        </div>
      );
    });

    // if (this.state.checked===true) {
    //   listCopy = listCopy.filter((list) => {
    //     const uniqueCountry = countryNames;
    //     const all = list.country;
    //     const filter = this.state.filterCountry;
    //       return all.match(filter);
    //   });
    //   console.log(this.state.countryIndex);
    // }

    // const filterCountry = [];
  //  const listCountry = listCopy.map(list => list.country);
    // let idx = countryNames.indexOf(listCountry);

    // if (this.state.checked===true) {
    //   for (var i = 0; i < listCountry.length; i++) {
    //     for (var k = 0; k < countryNames.length; k++) {
    //       if (listCountry{}) {
    //
    //       }
    //     }
    //   }
    // }

    // if (this.state.checked===true) {
    //   if (idx > -1){
    //     filterCountry.push(idx);
    //     idx = countryNames.indexOf(listCountry, idx +1);
    //   }
    //   console.log(filterCountry);
    // } else if (this.state.checked===false) {
    //   console.log(filterCountry);
    // }

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
          countries={countryMapMap}
          showAllCountry={this.showAllCountry}
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
        <div className={this.state.showScroll}
          onClick={this.scrollToTop}>
          {this.state.scrollStepInPx}
          {this.state.delayInMs}
        </div>
      </div>
    );
  }
}

export default App;
