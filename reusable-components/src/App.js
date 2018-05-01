import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      people: []
    };

    this.loadMore=this.loadMore.bind(this);
  }

  loadMore(page){
    fetch("https://swapi.co/api/people/?page=" + page)
      .then(response => {
        return response.json();
      })
    .then(data => {
      let copy = this.state.people.concat(data.results);
      this.setState({
        people: copy
      });
    });
  }

  render() {
    const list = this.state.people.map(p => {
      return(
        <div key={p.url}>
          <p>{p.name}</p>
        </div>
      );
    });

    return (
      <div className="App">
        <h1>Star Wars People Yo</h1>

        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={true}
          loader={<div className="loader" key={0}>Loading ...</div>}
        >
        {list}
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
