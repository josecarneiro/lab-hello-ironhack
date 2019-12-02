import React, { Component } from 'react';
import './Navbar.css';
import ironhacklogo from './ironhack-logo.svg';
import menu from './menu-top.svg';

class Navbar extends Component {
  render() {
    return (
      <nav className="Nav">
        <img src={ironhacklogo} className="Ironhack-logo" alt="logo" />
        <img src={menu} />
      </nav>
    );
  }
}

export default Navbar;
