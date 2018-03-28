import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './Homepage';
import PersonDetail from './PersonDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Homepage} />
          <Route path="/person/:id" component={PersonDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
