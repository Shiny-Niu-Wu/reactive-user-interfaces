import React, { Component } from 'react';
import './List.css';
import dropdownIcon from './pics/dropdown.png';
import dropupIcon from './pics/dropup.png';

class List extends Component {
  constructor(props){
    super(props);
    this.state={
      open: true
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
    let collapseAll = "collapseAll";
    if (this.state.open===true){
      collapseAll += ' in';
      imgSrc = dropupIcon;
    }

    return (
      <div className="List">
          <p className="category">All</p>
          <img src={imgSrc} className="dropImage" onClick={this.toggle}/>
          <div className={collapseAll}>{this.props.listName}</div>
      </div>
    );
  }
}

export default List;
