import React, { Component } from "react";
import ironhackLogo from "./../assets/images/ironhack-logo.svg";
import menuTop from "./../assets/images/menu-top.svg";
import "./Header.css";

class Heading extends Component {
  render() {
    return (
      <header className="App-header">
        <nav className="navbar">
          <img src={ironhackLogo} alt="IronHack Logo" />
          <img src={menuTop} alt="menu" />
        </nav>
      </header>
    );
  }
}

export default Heading;
