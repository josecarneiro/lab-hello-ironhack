import React from "react";
import logo from "./logo.svg";
import IronLogo from "./ironhack-logo.svg";
import menu from "./menu-top.svg";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import reactLogo from "./react-logo.svg";
import "./App.css";

import AwesomeButton from "./components/AwesomeButton";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="nav">
            <img src={IronLogo} className="menu-logo" alt="logo" />
            <img src={menu} className="menu-logo" alt="logo" />
          </div>
          <div class="main">
            <div class="left-main">
              <h1>Say Hello to ReactJS</h1>
              <p>
                You will learn a Frontend framework from scratch, to become a
                Ninja Developer
              </p>
              <AwesomeButton />
            </div>
            <div class="right-main">
              <img src={reactLogo} className="info-graphic" alt="logo" />
              <img src={reactLogo} className="info-graphic" alt="logo" />
              <img src={reactLogo} className="info-graphic" alt="logo" />
            </div>
          </div>
        </header>
        <div class="info-box">
          <div>
            <img src={icon1} className="info-graphic" alt="logo" />
            <h4>Declarative</h4>
          </div>
          <div>
            <img src={icon2} className="info-graphic" alt="logo" />
            <h4>Components</h4>
          </div>
          <div>
            <img src={icon3} className="info-graphic" alt="logo" />
            <h4>Single Way</h4>
          </div>
          <div>
            <img src={icon4} className="info-graphic" alt="logo" />
            <h4>JSX</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
