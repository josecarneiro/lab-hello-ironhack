import React, { Component } from 'react';
import logo from './logo.svg';
import Features from './Features';
import Navbar from './Nav';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <h1>Say Hello to ReactJS</h1>
          <h6>You will learn a Frontend framework from scratch to become a Ninja Developer</h6>
          <a href="#"> Awesome!</a>
        </header>
        <Features />
      </div>
    );
  }
}

export default App;
/*  <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Awesome!
          </a> */
