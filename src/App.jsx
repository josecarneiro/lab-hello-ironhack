import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

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
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/icon1.png'} alt="Declarative Icon" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/icon2.png'} alt="Components Icon" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/icon3.png'} alt="Single-Way Icon" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/icon4.png'} alt="JSX Icon" />
            <h2>JSX</h2>
            <p>Statically-typed designed to run on modern browsers.</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
