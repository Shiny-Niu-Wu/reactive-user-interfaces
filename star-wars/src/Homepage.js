import React, { Component } from 'react';
import './Homepage.css';
import {Link} from 'react-router-dom';

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      people: []
    }
  }

  componentDidMount(){
    fetch("https://swapi.co/api/people/")
      .then(response => {
        return response.json();
      })
    .then(data =>
      this.setState({
        isLoading: false,
        people: data.results
      })
    );
  }

  render() {
      if (this.state.isLoading) {
        return (
          <h1>Loading...</h1>
        );
      }

      const list = this.state.people.map(p => {
        const splitUrl = p.url.split("/");
        const id = splitUrl[splitUrl.length-2];

        return(
          <div key={p.url}>
            <h1>{p.name}</h1>
            <Link to={"/person/" + id}>Visit Person</Link>
          </div>
        );
      })

      return (
        <div className="Homepage">
          <div>{list}</div>
        </div>
      );

  }
}

export default Homepage;
