import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProfilePic from './pics/profile.jpg';
import NotebookSide from './pics/spiral.png';
import './GroupPage.css';

class GroupPage extends Component {
  constructor(props){
    super(props);
    this.state={
      groupName: ''

    }

    this.newGroup=this.newGroup.bind(this);
    this.changeGroupName=this.changeGroupName.bind(this);
    this.searchGroup=this.searchGroup.bind(this);
  }

  changeGroupName(e){
    this.setState({
      groupName: e.target.value
    });
  }

  newGroup(){
    this.props.newGroup(this.state.groupName);
    this.setState({
      groupName: ''
    });
  }

  searchGroup(e){
    this.props.searchGroup(e);
  }

  render() {
    return (
      <div className="GroupPage">
        <div className="wrapper">
          <header><div className="header">DocuMe</div></header>
          <aside>
            <img src={ProfilePic} alt={ProfilePic} className="profile"></img>
            <div className="links">
              <Link to="/personal"><div className="side">Personal</div></Link>
              <Link to="/"><div className="side">Home</div></Link>
              <Link to="/groups"><div className="side">&#9733; Groupings</div></Link>
              <Link to="/new"><div className="side">Create New</div></Link>
            </div>
          </aside>
          <figure>
            <img src={NotebookSide} alt={NotebookSide} className="spiral" />
            <img src={NotebookSide} alt={NotebookSide} className="spiral" />
          </figure>
          <main>
            <div className="bar">
              <div>Create New Group</div>
              <input className="noOutline" placeholder="group name" value={this.state.groupName} onChange={this.changeGroupName}></input>
              <button onClick={this.newGroup} className="button">Create</button>
              <input className="noOutline" placeholder="Search" onChange={this.searchGroup}></input>
            </div>
            <div className="entries">{this.props.groups}</div>
          </main>
        </div>
      </div>
    );
  }
}

export default GroupPage;
