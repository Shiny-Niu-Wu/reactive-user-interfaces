import React, { Component } from 'react';
import './Favorite.css';
import dropdownIcon from './pics/dropdown.png';
import dropupIcon from './pics/dropup.png';

class Favorite extends Component {
  constructor(props){
    super(props);
    this.state={
      open: false
    };
    this.toggle=this.toggle.bind(this);
  }

  toggle(){
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    let imgSrc = dropdownIcon;
    let collapseFav = "collapsePro";
    if (this.props.mustShow || this.state.open===true){
      collapseFav += ' in';
      imgSrc = dropupIcon;
    }

    return (
      <div className="Favorite">
        <p className="category">Best of Best</p>
        <img src={imgSrc} alt={imgSrc} className="dropImage" onClick={this.toggle}/>
        <div className={collapseFav}>{this.props.listName}</div>
      </div>
    );
  }
}

export default Favorite;
