import React, { Component } from 'react';
import logo from './logo.svg';
import Heading from './Heading';
import './Heading.css';
import Navbar from './Navbar';
import './Navbar.css';
import Tagline from './Tagline';
import './Tagline.css';
import Background from './Background';
import './Background.css';
import FourIcons from './FourIcons';
import './FourIcons.css';
import logoIcon from './logo192.png';
import logoIcon2 from './logo512.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <div className="MainContainer">
            <Heading />
            {/* <Background /> */}
          </div>
          <Tagline />

          {/* <img src={logoIcon} className="App-logo" alt="logo" /> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Awesome!
          </a>
        </header>
        <FourIcons />
      </div>
    );
  }
}

export default App;
