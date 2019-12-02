import React, { Component } from "react";
import logo from "../logo.svg";
import Button from "./Button";

import "./../Header.css";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Say hello to <br /> reactJS
        </h1>
        <p>
          You will learn a frontend <br /> framework from scratch to,
          <br /> become a ninja developer
        </p>
        <Button />
      </header>
    );
  }
}

export default Header;
