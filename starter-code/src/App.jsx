import React, { Component } from 'react';

import Header from "./components/Header";
import Landing from "./components/Landing";
import Features from "./components/Features";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-landing">
          <div className="navbar">
            <Header />
          </div>
          <Landing />
        </div>
        <Features />
      </div>
    );
  }
}

export default App;
