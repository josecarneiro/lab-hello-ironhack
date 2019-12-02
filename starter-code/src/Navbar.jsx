import React, { Component } from "react";
import logo from "./images/ironhack-logo.svg";
import menutop from "./images/menu-top.svg";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <img src={logo} alt=""></img>
        <img src={menutop} alt=""></img>
      </nav>
    );
  }
}
export default Navbar;
