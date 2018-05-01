import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Entries.css';
import ProfilePic from './pics/profile.jpg';

class Entries extends Component {
  constructor(props){
    super(props);
    this.state={
      comment: '',
      followUps: []
    };

    this.addComment=this.addComment.bind(this);
    this.changeComment=this.changeComment.bind(this);
  }

  changeComment(e){
    this.setState({
      comment: e.target.value
    });
  }

  addComment(comment){
    let Copy = this.state.followUps.slice();
    Copy.push({
      comment: this.state.comment
    });
    this.setState({
      followUps: Copy,
      comment: ''
    });
  }

  render() {
    let allComments = this.state.followUps.map((comment, i) => {
      return(
        <div>{comment.comment}</div>
      );
    })

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
              <div>{this.props.entryDate}</div>
              <div>{this.props.entryGroup}</div>
            </div>
            <div className="diaryBox">
              <div className="titleBox">{this.props.entryTitle}</div>
              <div className="content" dangerouslySetInnerHTML={{ __html: this.props.entryContent }} />
            </div>
            <div className="followUp">
              <textarea placeholder="More to say..." className="comment" value={this.state.comment} onChange={this.changeComment}></textarea>
              <button className="addComment" onClick={this.addComment}>Add</button>
            </div>
            {allComments}
          </main>
        </div>
      </div>
    );
  }
}

export default Entries;
