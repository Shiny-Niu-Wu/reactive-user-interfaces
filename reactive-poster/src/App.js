import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import Poster from './Poster';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      event_name: "EVENT NAME",
      location: "LOCATION",
      time: "TIME"
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(label, txt){
    if (label === "Event name") {
      this.setState({
        event_name: txt
      });
    }

    if (label === "Location") {
      this.setState({
        location: txt
      });
    }

    if (label === "Time") {
      this.setState({
        time: txt
      });
    }
  }

  render() {
  const info = [
    {
      labels: "Event name",
      placeholders: "TYPE EVENT NAME HERE",
      data: this.state.event_name
    },

    {
      labels: "Location",
      placeholders: "TYPE LOCATION HERE",
      data: this.state.location
    },

    {
      labels: "Time",
      placeholders: "MONTH+DATE, TIME",
      data: this.state.time
    }
  ];

    let information = info.map((info, i) => {
      return(
        <Input
          label = {info.labels}
          placeholder = {info.placeholders}
          onChange = {this.onChange}
          key = {i}
        />
      );
    })

    let Display = info.map((info, k) => {
      return(
        <Poster
          display = {info.data}
          className = {info.labels}
          key = {k}
        />
      );
    })

    return (
      <div className="App">
        <div>{information}</div>
        <div>{Display}</div>
      </div>
    );
  }
}

export default App;
