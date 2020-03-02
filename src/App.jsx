import React, { Component } from 'react';

import './App.css';

import Navbar from './Navbar';
import Body from './Body';
import SecondSec from './SecondSec';

// import ironhackLogo from '../../public/images/ironhack-logo.svg';

class App extends Component {
  render() {
    return (
      <header>
        <Navbar />
        <Body />
        <SecondSec />
      </header>
    );
  }
}

export default App;
