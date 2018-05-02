import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Entries.css';
import ProfilePic from './pics/profile.jpg';

class Entries extends Component {
  constructor(props){
    super(props);
    this.state={
      comment: ''
    }

    this.addComment=this.addComment.bind(this);
    this.changeComment=this.changeComment.bind(this);
  }

  changeComment(e){
    this.setState({
      comment: e.target.value
    });
  }

  addComment(){
    this.props.addComment(this.state.comment, this.props.entry.id);
    this.setState({
      comment: ''
    });
  }

  render() {

    return (
      <div className="Entries">
        <div className="wrapper">
          <header>DocuMe</header>
          <aside>
            <img src={ProfilePic} alt={ProfilePic} className="profile"></img>
            <Link to="/personal"><div className="side">Personal</div></Link>
            <Link to="/"><div className="side">Home</div></Link>
            <Link to="/groups"><div className="side">Groupings</div></Link>
            <Link to="/new"><div className="side">Create New</div></Link>
          </aside>
          <main>
            <div className="info">
              <div>{this.props.entry.date}</div>
              <div>Group: {this.props.entry.group}</div>
            </div>
            <div className="diaryBox">
              <div className="titleBox">{this.props.entry.title}</div>
              <div className="content" dangerouslySetInnerHTML={{ __html: this.props.entry.html }} />
            </div>
            <div className="followUp">
              <textarea placeholder="More to say..." className="comment" value={this.state.comment} onChange={this.changeComment}></textarea>
              <button className="addComment" onClick={this.addComment}>Add</button>
            </div>
            {this.props.allComments}
          </main>
        </div>
      </div>
    );
  }
}

export default Entries;
