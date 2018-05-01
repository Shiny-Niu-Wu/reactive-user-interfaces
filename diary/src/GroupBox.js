import React, { Component } from 'react';
import './GroupBox.css';

class GroupBox extends Component {
  constructor(props){
    super(props);
    this.state={}

    this.clickGroup=this.clickGroup.bind(this);
  }

  clickGroup(){
    this.props.clickGroup(this.props.group);
  }

  render() {
    return (
        <div className="box" onClick={this.clickGroup}>
          {this.props.group}
        </div>
    );
  }
}

export default GroupBox;
