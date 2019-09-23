import React from "react";
// import logo from "./logo.svg";
import Logo from "./static/ironhack-logo.svg";
import Menutop from "./static/menu-top.svg";
import TagLine from "./components/TagLine";
import HeaderText from "./components/HeaderText";
import Icon1 from "./static/icon1.png";
import Icon2 from "./static/icon2.png";
import Icon3 from "./static/icon3.png";
import Icon4 from "./static/icon4.png";

import "./App.css";

import Button from "./components/Button";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <img src={Logo} alt="logo" />
          <img src={Menutop} alt="nav menu" />
        </div>
        <header className="App-header">
          <HeaderText />
          <TagLine />
          <Button />
        </header>
        <div className="icon-div">
          <img src={Icon1} alt="iron" />
          <img src={Icon2} alt="icon" />
          <img src={Icon3} alt="icon" />
          <img src={Icon4} alt="icon" />
        </div>
      </div>
    );
  }
}

export default App;
