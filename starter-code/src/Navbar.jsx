import React, { Component } from 'react';
import logo from './images/ironhack-logo.svg';
import menu from './images/menu-top.svg';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={menu} className="menu-icon" alt="logo" />
        </a>
      </div>
    );
  }
}

export default Navbar;
