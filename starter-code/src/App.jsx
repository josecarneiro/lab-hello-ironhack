import React, { Component } from 'react';
import logo from './logo.svg';

import './components/App.css';
import './components/Button.css';
import './components/Boxes.css';
import './components/Navbar.css';

class App extends Component {
  render() {
    return (
      <div>
    <div id="intro">
      <div className="navbar">
        <img
          src="../images/ironhack-logo.svg"
          alt="Ironhack logo"
          id="ironhack-logo"
        />
        <img className="icon" src="../images/menu-top.svg" alt="menu-image" id="menu-image" />
      </div>
      <h1 id="heading">Say hello to <br /> ReactJS</h1>
      <p id="ingress">
        You will learn a Frontend framework from scratch, to become a Ninja
        Developer
      </p>
      <button id="btn">Awesome!</button>
    </div>

    <div id="box-div">
      <div className="boxes">
        <img src="../images/icon1.png" alt="" className="box-image" />
        <h2>Declarative</h2>
        <p class="p-text">React makes it painless to create interactive UIs.</p>
      </div>
      <div className="boxes">
        <img src="../images/icon2.png" alt="" className="box-image" />
        <h2>Components</h2>
        <p class="p-text">Build encapsulated components that manage their state.</p>
      </div>
      <div className="boxes">
        <img src="../images/icon3.png" alt="" className="box-image" />
        <h2>Single-Way</h2>
        <p class="p-text">A set of immutable values are passed to the component's.</p>
      </div>
      <div className="boxes">
        <img src="../images/icon4.png" alt="" className="box-image" />
        <h2>JSX</h2>
        <p class="p-text">Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  </div>
    );
  }
}

export default App;