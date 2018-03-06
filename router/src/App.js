import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ClassesPage from './ClassesPage';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
          </header>
          <div className="pages">
            <Route exact path="/" Component={HomePage} />
            <Route exact path="/about" Component={AboutPage} />
            <Route path="/classes/:id" Component={ClassesPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
