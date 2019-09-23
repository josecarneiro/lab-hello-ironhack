import React from "react";

import ironLogo from "./../images/ironhack-logo.svg";
import menuBar from "./../images/menu-top.svg";

class Logo extends React.Component {
  render() {
    return (
      <div className="nav">
        <img className="ironLogo" src={ironLogo} alt="" />
        <img className="menuBar" src={menuBar} alt="" />
      </div>
    );
  }
}

export default Logo;
