import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      search: " ",
      tweets:[
        {name: "super Shiny1", body: "first tweet"},
        {name: "super Shiny2", body: "second tweet"},
        {name: "Shiny", body: "third tweet"},
        {name: "Shiny", body: "fourth tweet"}
      ]
    };
    this.Search = this.Search.bind(this);
  }

  Search(e){
    this.setState({
      search: e.target.value
    });
  }

  render() {
    let arrCopy = this.state.tweets.slice();

    if (this.state.search !== " ") {
      arrCopy = arrCopy.filter((tweet) => {
        const search = this.state.search.toLowerCase();
        const userName = tweet.name.toLowerCase();
        return userName.match(search);
      });
    }

      const tags = arrCopy.map((tweet, i) => {
        return(
          <div key={i}>
            @{tweet.name}: {tweet.body}
          </div>
        );
      });

    return (
      <div className="App">
      <div className="controls">
        <input type="text" onChange={this.Search}></input>
      </div>
         {tags}
      </div>
    );
  }
}

export default App;
