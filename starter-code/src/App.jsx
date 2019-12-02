import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from "./Menu";
import Navbar from "./Navbar";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <header className="App-header">
        <div className='content'>
          <h1> Say Hello to ReactJS</h1>
          <h3>You will learn a Frontend framework from scratch, to become a Ninja Developer</h3>
          <button>Awesome!</button>
          </div>
        </header>
        <Menu />
      </div>
    );
  }
}

export default App;
