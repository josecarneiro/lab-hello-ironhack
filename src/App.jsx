import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Declarative from './components/Declarative';
import Components from './components/Components';
import SingleWay from './components/SingleWay';
import JSX from './components/JSX';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <img src={process.env.PUBLIC_URL + '/images/ironhack-logo.svg'} alt="Ironhack logo" />
            <img src={process.env.PUBLIC_URL + '/images/menu-top.svg'} alt="Menu" />
          </nav>
          <div className="App-intro">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
            <button>Awesome!</button>
          </div>
        </header>
        <main>
          <Declarative />
          <Components />
          <SingleWay />
          <JSX />
        </main>
      </div>
    );
  }
}

export default App;
