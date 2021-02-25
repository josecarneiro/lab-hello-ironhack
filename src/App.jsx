import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Info from './components/Info';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />       
        <Info />
      </div>
    );
  }
}

export default App;


