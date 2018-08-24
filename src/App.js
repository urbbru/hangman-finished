import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HangmanContainer from './components/HangmanContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' render={(props) => (
            <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Hangman</h1>
            </header>
            
              <p>Start a new game by clicking the link below</p>
              <Link to={'/hangman'}>Start Playing</Link>
            </div>
          )}/>
          <Route exact path="/hangman" component={HangmanContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
