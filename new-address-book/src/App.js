import React, { Component } from 'react';
import './App.css';
import Contact from './Contact.js';
import ContactDetail from './ContactDetail.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      show: false,
      fav: false,
      active: "",
      //contact: ""
    }

    this.closeModal=this.closeModal.bind(this);
  }

  clickContact(i){
    this.setState({
      show: true,
      index: i
    });
    console.log(i);
  }

  closeModal(){
    this.setState({
      show: false
    });
  }

  addFav(i){
    this.setState({
      fav: !this.state.fav,
      active: i
      //contact: i
    });
    console.log(i + " star");
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

    let contactIcon = "contactNorm";
    if (this.state.fav===true) {
      contactIcon = "contactFav";
    }

    const listAll = listNames.map((name, i) => {
      return(
        <div key={i}>
          <Contact
            firstName={name.first}
            lastName={name.last}
            contactIcon={contactIcon}
            handleClick={this.clickContact.bind(this, i)}
          />
        </div>
      );
    });

    const listContactInfo = listNames.map((info, i) => {
      return(
        <div key={i}>
          <ContactDetail
            firstName={info.first}
            lastName={info.last}
            nickName={info.nickName}
            bday={info.bday}
            phone={info.phone}
            email={info.email}
            address={info.address}
            country={info.country}
            note={info.note}
            addFav={this.addFav.bind(this, i)}
            active={this.state.active}
            contact={i}
          />
        </div>
      );
    });

    let modalClass = "hideModal";
    if (this.state.show===true) {
      modalClass = "showModal";
    }

    return (
      <div className="App">
        <div>Banner</div>
        <div>Profile</div>
        <div>Favorites</div>
        <div>{listAll}</div>

        <div className={modalClass}>
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>&times;</span>
              <div>{listContactInfo[this.state.index]}</div>
            </div>
       </div>

        <div>Search Bar</div>
        <div>Go to Top</div>
      </div>
    );
  }
}

export default App;
