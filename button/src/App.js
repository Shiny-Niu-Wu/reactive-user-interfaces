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
      result: name
    });
  }

  render() {
    return (
      <div className="App">

        <div className="ButtonRow">
          <Button onClick= {this.buttonClicked}
            name= "First Button"
          />

          <Button onClick= {this.buttonClicked}
            name= "Second Button"
          />

          <Button onClick= {this.buttonClicked}
            name= "Third Button"
          />
        </div>

        <ResultBox
          result= {this.state.result}
        />

      </div>
    );
  }
}

export default App;
