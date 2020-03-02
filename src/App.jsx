import React, { Component } from 'react';
import logo from './logo.svg';

import Navbar from './Navbar';
import BodyContend from './body';
import SectionWhite from './section';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <header className="App-header">
          
          <BodyContend></BodyContend>


         
        </header>

        <SectionWhite></SectionWhite>
      </div>
    );
  }
}

export default App;
