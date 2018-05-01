import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PersonDetail extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      people: {}
    }
  }

  componentDidMount(){
    fetch("https://swapi.co/api/people/" + props.match.params.id + "/")
      .then(response => {
        return response.json();
      })
    .then(data =>
      this.setState({
        isLoading: false,
        people: data
      })
    );
  }

  render() {
      if (this.state.isLoading) {
        return (
          <h1>Loading...</h1>
        );
      }

      return (
        <div key={this.state.people.url}>
          <h1>{this.state.people.name}</h1>
          <p>Birth Year: {this.state.people.birth_year}</p>
          <p>Gender: {this.state.people.gender}</p>
          <p>Height: {this.state.people.height}</p>
          <p>Weight: {this.state.people.mass}</p>
          <Link to="/">Back to Homepage</Link>
        </div>
      );
  }
}

export default PersonDetail;
