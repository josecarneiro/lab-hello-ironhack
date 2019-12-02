import React, { Component } from 'react';
import './Navbar.css';
import navBtn from './menu-top.svg';
import navLogo from './ironhack-logo.svg';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img src={navLogo} className="App-Navlogo" alt="nav-logo" />
        <img src={navBtn} className="App-Navlogo" alt="nav-logo" />
        {/* right way: <img src="/images/icon1.png" className="App-Navlogo" alt="nav-logo" /> */}
      </nav>
    );
  }
}

export default Navbar;
