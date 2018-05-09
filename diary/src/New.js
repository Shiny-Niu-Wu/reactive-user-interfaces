import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './New.css';
import ProfilePic from './pics/profile.jpg';
import NotebookSide from './pics/spiral.png';

class New extends Component {
  constructor(props){
    super(props);
    this.state={
      title: '',
      group: '',
      date: new Date().toISOString().substr(0, 10),
      showNew: false,
      editorState: EditorState.createEmpty(),
      html: ''
    };

    this.submitEntry=this.submitEntry.bind(this);
    this.changeTitle=this.changeTitle.bind(this);
    this.changeDate=this.changeDate.bind(this);
    this.selectGroup=this.selectGroup.bind(this);
    this.onChange=this.onChange.bind(this);
  }

  submitEntry(){
    this.props.submitEntry(this.state.date, this.state.title, this.state.group, this.state.html);
    this.setState({
      title: '',
      group: '',
      editorState: '',
      html: '',
      showNew: true
    });
  }

  changeDate(e){
    this.setState({
      date: e.target.value
    });
  }

  changeTitle(e){
    this.setState({
      title: e.target.value
    });
  }

  selectGroup(e){
    this.setState({
      group: e.target.value
    });
  }

  onChange: Function = (editorState) => {
    this.setState({
      editorState,
      html: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    });
  };

  render() {
    let seeNew = "newEntry";
    if (this.state.showNew===true) {
      seeNew += " showNew"
    }

    const { editorState } = this.state;


    return (
      <div className="New">
        <div className="wrapper">
          <header><div className="header">DocuMe</div></header>
          <aside>
            <img src={ProfilePic} alt={ProfilePic} className="profile"></img>
            <div className="links">
              <Link to="/personal"><div className="side">Personal</div></Link>
              <Link to="/"><div className="side">Home</div></Link>
              <Link to="/groups"><div className="side">Groupings</div></Link>
              <Link to="/new"><div className="side">&#9733; Create New</div></Link>
            </div>
          </aside>
          <figure>
            <img src={NotebookSide} alt={NotebookSide} className="spiral" />
            <img src={NotebookSide} alt={NotebookSide} className="spiral" />
          </figure>
          <main>
            <Link to="/">
              <div className={seeNew}>Check out new Entry!</div>
            </Link>
            <h1 className="h1Entry">New Entry</h1>
            <div className="diaryBox">
              <div className="choose">
                <input className="chooseDate" type="date" value={this.state.date} onChange={this.changeDate} />
                <select className="group" value={this.state.group} onChange={this.selectGroup}>
                  <option value="" disabled selected>Select a group</option>
                  {this.props.groupOption}
                </select>
              </div>
              <textarea className="titleBox" placeholder="Title Here" value={this.state.title} onChange={this.changeTitle}></textarea>
              <Editor
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                editorState={editorState}
                onEditorStateChange={this.onChange}
                placeholder="I know you want to type something..."
              />
            </div>
            <div className="submit">
              <button onClick={this.submitEntry} className="submitButton">Submit</button>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default New;
