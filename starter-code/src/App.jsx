import React, { Component } from 'react';

import Navbar from "./Navbar";
import Heading from "./Heading";
import Button from "./Button";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <Heading />
          <Button />
      </div>
    );
  }
}

export default App;
