import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HangmanContainer from './components/HangmanContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'
import { newGame } from './actions/game'

class App extends Component {
  
  render() {
    {this.props.newGame()}
    return (
      <Router basename={'/hangman-finished'}>
        <div className="App">
          <Route exact path={`${process.env.PUBLIC_URL}/`} render={(props) => (
            <div>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Hangman</h1>
              </header>
            
              <p>Start a new game by clicking the link below</p>
              <Link to={`${process.env.PUBLIC_URL}/hangman`}>Start Playing</Link>
            </div>
          )}/>
          <Route exact path={`${process.env.PUBLIC_URL}/hangman`} component={HangmanContainer} />
        </div>
      </Router>
    );
  }
}

export default connect(null, { newGame })(App);
