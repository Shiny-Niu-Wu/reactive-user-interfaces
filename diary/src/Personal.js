import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Personal.css';
import ProfilePic from './pics/profile.jpg';

class Personal extends Component {
  render() {
    return (
      <div className="Personal">
        <div className="wrapper">
          <header>DocuMe</header>
          <aside>
            <img src={ProfilePic} alt={ProfilePic} className="profile"></img>
            <Link to="/personal"><div className="side">&#9733; Personal</div></Link>
            <Link to="/"><div className="side">Home</div></Link>
            <Link to="/groups"><div className="side">Groupings</div></Link>
            <Link to="/new"><div className="side">Create New</div></Link>
          </aside>
          <main>
            <p>More personal things to come.</p>
          </main>
        </div>
      </div>
    );
  }
}

export default Personal;
