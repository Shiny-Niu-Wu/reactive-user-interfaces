import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Personal.css';
import ProfilePic from './pics/profile.jpg';
import NotebookSide from './pics/spiral.png';

class Personal extends Component {
  constructor(props){
    super(props);

    let stringState = localStorage.getItem('favorites');
    if (stringState) {
      this.state = JSON.parse(stringState);
    } else {
      this.state={
        category: '',
        thing: '',
        favoriteThings: []
      }
    }

    this.newFavorite=this.newFavorite.bind(this);
    this.changeCategory=this.changeCategory.bind(this);
    this.changeThing=this.changeThing.bind(this);
  }

  changeCategory(e){
    this.setState({
      category: e.target.value
    });
  }

  changeThing(e){
    this.setState({
      thing: e.target.value
    });
  }

  newFavorite(){
    let Copy = this.state.favoriteThings.slice();
    Copy.push({
      category: this.state.category,
      thing: this.state.thing
    });
    this.setState({
      favoriteThings: Copy,
      category: '',
      thing: ''
    });
  }

  componentDidUpdate(){
    const stringState = JSON.stringify(this.state);
    localStorage.setItem('favorites', stringState);
  }

  render() {
    let favorites = this.state.favoriteThings.map((favorite, i) => {
      return(
        <div className="favoriteSentence" key={i}>
          <p className="myFavorite">My favorite</p>
          <input defaultValue={favorite.category} className="favoriteCategory" />
          <p className="is"> is </p>
          <input defaultValue={favorite.thing} className="favoriteThing" />
        </div>
      );
    })

    return (
      <div className="Personal">
        <div className="wrapper">
          <header><div className="header">DocuMe</div></header>
          <aside>
            <img src={ProfilePic} alt={ProfilePic} className="profile"></img>
            <div className="links">
              <Link to="/personal"><div className="side">&#9733; Personal</div></Link>
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
            <div className="bar">
              <div>My favorite</div>
              <input placeholder="person" value={this.state.category} onChange={this.changeCategory}></input>
              <div>is</div>
              <input placeholder="Jerry" value={this.state.thing} onChange={this.changeThing}></input>
              <button onClick={this.newFavorite} className="button">Add</button>
            </div>
            <div className="favorites">{favorites}</div>
          </main>
        </div>
      </div>
    );
  }
}

export default Personal;
