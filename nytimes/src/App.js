import React, { Component } from 'react';
import './App.css';
import Article from './Article';
import pic1 from "./pics/pic1.jpg";
import pic2 from "./pics/pic2.jpg";
import pic3 from "./pics/pic3.jpg";

class App extends Component {
  render() {

    return (
      <div className = "App">
        <Article
          date = "Jan. 30, 2018"
          subtitle = "THE SHIFT"
          title = "Kodak's Dubious Blockchain Gamble"
          description = "What's a 130-year-old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck."
          writer = "KEVIN RUSE"
          imgSrc = {pic1}
        />

        <div><hr /></div>

        <Article
          date = "Jan. 30, 2018"
          title = "Taiwan Retaliates Against Chinese Airlines, Hampering Luner New Year's Travel"
          description = "Taiwan, pushing back over encroahment on Taiwan Strait airspace, may leave thousands without flights home for the holiday."
          writer = "CHRIS HORTON"
          imgSrc = {pic2}
        />

        <div><hr /></div>

        <Article
          date = "Jan. 29, 2018"
          title = "New Jersey Embraces an Idea It Once Rejected: Make Utilities Pay to Emit Carbon"
          description = "Democratic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy."
          writer = "BRAD PLUMNER"
          imgSrc = {pic3}
        />
      </div>
    )
  }
}

export default App;
