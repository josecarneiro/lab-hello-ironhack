import React, { Component } from 'react';
import logo from './logo.svg';
import AppMessage from './AppMessage';
import Button from './Button';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <img
              src={process.env.PUBLIC_URL + './images/ironhack-logo.svg'}
              className="App-logo"
              alt="logo"
            />
            <img
              src={process.env.PUBLIC_URL + './images/menu-top.svg'}
              className="Menu"
              alt="menu"
            />
          </nav>

          <AppMessage />
          <Button />
        </header>
        <body className="whitepart">
          <div>
            <img src={process.env.PUBLIC_URL + './images/icon1.png'} className="icon" alt="icon1" />
            <h3>Declarative</h3>
            <h5>React makes it painless to create interactive UIs.</h5>
          </div>

          <div>
            <img src={process.env.PUBLIC_URL + './images/icon2.png'} className="icon" alt="icon1" />
            <h3>Components</h3>
            <h5>Build encapsulated components that manage their state</h5>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + './images/icon3.png'} className="icon" alt="icon1" />
            <h3>Single-Way</h3>
            <h5>A set of immutable values are passed to the component's.</h5>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + './images/icon4.png'} className="icon" alt="icon1" />
            <h3>JSX</h3>
            <h5>Statically-typed, designed to run on modern browswes.</h5>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
