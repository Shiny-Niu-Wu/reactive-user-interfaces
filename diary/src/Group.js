import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Group.css';
import ProfilePic from './pics/profile.jpg';
import NotebookSide from './pics/spiral.png';

class Group extends Component {

  render() {
    return (
      <div className="Group">
        <div className="wrapper">
          <header><div className="header">DocuMe</div></header>
          <aside>
            <img src={ProfilePic} alt={ProfilePic} className="profile"></img>
            <div className="links">
              <Link to="/personal"><div className="side">Personal</div></Link>
              <Link to="/"><div className="side">Home</div></Link>
              <Link to="/groups"><div className="side">Groupings</div></Link>
              <Link to="/new"><div className="side">Create New</div></Link>
            </div>
          </aside>
          <figure>
            <img src={NotebookSide} alt={NotebookSide} className="spiral" />
            <img src={NotebookSide} alt={NotebookSide} className="spiral" />
          </figure>
          <main>
            <h1>{this.props.entryGroup}</h1>
            <div>{this.props.entries}</div>
            <Link to="/new"><button>Create New</button></Link>
          </main>
        </div>
      </div>
    );
  }
}

export default Group;
