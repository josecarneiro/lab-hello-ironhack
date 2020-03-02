import React, { Component } from 'react';
import './App.css';
import logo from './menu-top.svg';
import ironhack from './ironhack-logo.svg';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';

import './App.css';
import AppComponent from './AppComponents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <navbar className="App-header">
          <img src={ironhack} alt="ironHack" />
          <img src={logo} className="App-logo" alt="logo" />
        </navbar>
        <header>
          <h1>Say Hello to ReactJs</h1>
          <p>You ill learn a Frontend framework from scratch, to become an Ninja Developer</p>
          <button>Awesome!</button>
        </header>
        <section>
          <AppComponent />
        </section>
      </div>
    );
  }
}

export default App;
