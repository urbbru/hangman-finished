import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HangmanContainer from './components/HangmanContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button } from "@blueprintjs/core";
export default class App extends Component {
  
  render() {
    return (
      <Router>

        <div className="App">

                <Navbar className="navBar">
                    <NavbarGroup>
                        <NavbarHeading>Hangman</NavbarHeading>
                    </NavbarGroup>
                    <NavbarGroup align="right">
                        <Link to={`${process.env.PUBLIC_URL}/`}><Button icon="home" text="Home" /></Link>
                        <NavbarDivider />
                        <Link to={`${process.env.PUBLIC_URL}/hangman`}><Button icon="play" text="Play" /></Link>
                    </NavbarGroup>
                </Navbar>
        <div className="container">
          <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => (
            <div>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
              
              <p>Try your luck at hangman</p>
              <Link to={`${process.env.PUBLIC_URL}/hangman`}>Start Playing</Link>
            </div>
          )}/>

          <Route exact path={`${process.env.PUBLIC_URL}/hangman`} component={HangmanContainer} />
        </div>
        </div>

      </Router>
    );
  }
}
