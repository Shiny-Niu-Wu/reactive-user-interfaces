import React, { Component } from 'react';

class ClassesPage extends Component {
  render() {
    return (
        <div className="ClassesPage">
          {this.props.match.perams.id}
        </div>
    );
  }
}

export default ClassesPage;
