import React from "react";
import "./../App.css";
import logo from "./../images/ironhack-logo.svg";
import menu from "./../images/menu-top.svg";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <img src={logo} width="50px" className="App-logo" alt="logo" />
        <img src={menu} width="20px" className="menu" alt="logo" />
      </nav>
    );
  }
}

export default Navbar;
