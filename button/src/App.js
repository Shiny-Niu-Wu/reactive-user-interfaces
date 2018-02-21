import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import ResultBox from './ResultBox';

class App extends Component {

  constructor(props){
    super(props);
    this.state= {result: "NOTHING"};

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(name){
    this.setState({
      result: name,
      active: name
    });
  }

  render() {
    const buttons = ['Button 1', 'Button 2', 'Button 3'];
    const layout = buttons.map((name,i) => {
      return(
        <Button
          name={name}
          onClick= {this.buttonClicked}
          active={this.state.active}
          key={i}
        />
      );
    })

    return (
      <div className="App">

        <div className="ButtonRow">{layout}</div>

        <ResultBox
          result= {this.state.result}
        />

      </div>
    );
  }
}

export default App;
