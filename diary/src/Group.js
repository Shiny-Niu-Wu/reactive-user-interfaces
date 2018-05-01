import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Group.css';
import ProfilePic from './pics/profile.jpg';

class Group extends Component {

  render() {
    return (
      <div className="Group">
        <div className="wrapper">
          <header>DocuMe</header>
          <aside>
            <img src={ProfilePic} alt={ProfilePic} className="profile"></img>
            <div className="side">Personal</div>
            <Link to="/"><div className="side">Home</div></Link>
            <Link to="/groups"><div className="side">Groupings</div></Link>
            <Link to="/new"><div className="side">Create New</div></Link>
          </aside>
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
