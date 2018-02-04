import React, { Component } from 'react';
import './App.css';
import pic1 from './pics/pic1.jpg';
import pic2 from './pics/pic2.jpg';
import pic3 from './pics/pic3.jpg';

class App extends Component {
  render() {
    const date_1 = "Jan. 30, 2018";
    const title_1 = "Kodak's Dubious Blockchain Gamble";
    const description_1 = "What's a 130-year-old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck.";
    const writer_1 = "KEVIN RUSE";
    const subtitle_1 = "THE SHIFT";

    const date_2 = "Jan. 30, 2018";
    const title_2 = "Taiwan Retaliates Against Chinese Airlines, Hampering Luner New Year's Travel";
    const description_2 = "Taiwan, pushing back over encroahment on Taiwan Strait airspace, may leave thousands without flights home for the holiday.";
    const writer_2 = "CHRIS HORTON"

    const date_3 = "Jan. 29, 2018";
    const title_3 = "New Jersey Embraces an Idea It Once Rejected: Make Utilities Pay to Emit Carbon";
    const description_3 = "Democratic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy.";
    const writer_3 = "BRAD PLUMNER";

    return (
      <div className ="App">
      <div className = "news_1">
           <div className ="Date">{date_1}</div>
           <div className ="Content">
                <div className = "title">
                     <div className="sub-title">{subtitle_1}</div>
                {title_1}</div>
                <div className = "description">{description_1}</div>
                <div className = "writer">{writer_1}</div>
          </div>
          <div className ="Pic"><img className="pic1" src={pic1} alt={pic1}/></div>
      </div>

      <div><hr /></div>

      <div className = "news_2">
           <div className ="Date">{date_2}</div>
           <div className ="Content">
                <div className = "title">{title_2}</div>
                <div className = "description">{description_2}</div>
                <div className = "writer">{writer_2}</div>
          </div>
          <div className ="Pic"><img className="pic2" src={pic2} alt={pic2}/></div>
      </div>

      <div><hr /></div>

      <div className = "news_3">
           <div className ="Date">{date_3}</div>
           <div className ="Content">
                <div className = "title">{title_3}</div>
                <div className = "description">{description_3}</div>
                <div className = "writer">{writer_3}</div>
          </div>
          <div className ="Pic"><img className="pic3" src={pic3} alt={pic3}/></div>
      </div>
      </div>
    );
  }
}

export default App;
