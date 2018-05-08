import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Homepage.css';
import ProfilePic from './pics/profile.jpg';
import NotebookSide from './pics/spiral.png';

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state={}

    this.search=this.search.bind(this);
    this.changeDate=this.changeDate.bind(this);
  }

  changeDate(e){
    this.props.changeDate(e);
  }

  search(e){
    this.props.search(e);
  }

  render() {

    return (
      <div className="Homepage">
        <div className="wrapper">
          <header><div className="header">DocuMe</div></header>
          <aside>
            <img src={ProfilePic} alt={ProfilePic} className="profile"></img>
            <div className="links">
              <Link to="/personal"><div className="side">Personal</div></Link>
              <Link to="/"><div className="side">&#9733; Home</div></Link>
              <Link to="/groups"><div className="side">Groupings</div></Link>
              <Link to="/new"><div className="side">Create New</div></Link>
            </div>
          </aside>
          <figure>
            <img src={NotebookSide} alt={NotebookSide} className="spiral" />
            <img src={NotebookSide} alt={NotebookSide} className="spiral" />
          </figure>
          <main>
            <div className="filterBar">
              <div className="filterBy">Filter By Date: </div>
              <input className="date" type="date" onChange={this.changeDate} />
              <input className="search" placeholder="Search" onChange={this.search}></input>
            </div>
            <div className="entries">
              {this.props.entries}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Homepage;
