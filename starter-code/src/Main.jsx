import React, { Component } from 'react';
import './Main.css';
import reactLogo from './react-logo.svg';

class Main extends Component {
  render() {
    return (
      <main className="mainBody">
        <h1 className="title-h1">Say hello to ReactJS</h1>
        <p className="firstParagraph">
          You will learn a Frontend framework from scratch, to become a Ninja
          Developer.
        </p>
        {/* <img src={reactLogo} className="App-Navlogo" alt="nav-logo" /> */}
      </main>
    );
  }
}

export default Main;
