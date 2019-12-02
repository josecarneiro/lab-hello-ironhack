import React from 'react';
import { Component } from 'react';
import IHLogo from './../images/ironhack-logo.svg';
import menuTop from './../images/menu-top.svg';
import './header.css';
class Header extends Component {
  render() {
    return (
      <div className="topNav">
        <div className="navImg">
          <img src={IHLogo} alt="ihlogo" />
          <img src={menuTop} alt="menu" />
        </div>
      </div>
    );
  }
}

export default Header;
