import React, { Component } from "react";
// import logo from "./logo.svg";

import "./App.css";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="DarkBg">
          <header className="App-header">
            <Navbar />
            <div>
              <h1 className="Title">
                Say hello to <br /> ReactJS
              </h1>
              <p className="TitleText">
                You will learn a Frontend <br /> framework from scratch, to{" "}
                <br /> become a Ninja Developer.
              </p>
            </div>
          </header>
          <button className="Button">Awesome!</button>
        </div>
        <div className="Bottom">
          <div className="BottomImgs">
            <img src="/images/icon1.png" alt="" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="BottomImgs">
            <img src="/images/icon2.png" alt="" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="BottomImgs">
            <img src="/images/icon3.png" alt="" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div className="BottomImgs">
            <img src="/images/icon4.png" alt="" />
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
