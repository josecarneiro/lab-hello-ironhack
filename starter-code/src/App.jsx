import React, { Component } from 'react';
import logo from './logo.svg';
import reactLogo from './images/react-logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="App-header"></header>
        <div className="App-body">
          <div className="Body-left">
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn a frontend framework from scratch, to becaome a
              ninka devalopir
            </p>
            <button className="App-button" id="button">
              {' '}
              Awesome!{' '}
            </button>
          </div>
          <div className="Body-right">
            <div className="Logo-line" margin="8rem">
              <img src={reactLogo} alt="" height="400px" margin="10rem" />
              <img src={reactLogo} alt="" margin-right="5rem" height="180px" />
            </div>
            <div className="Logo-line">
              <img src={reactLogo} alt="" height="250px" />{' '}
              <img src={reactLogo} alt="" height="180px" margin-right="3rem" />
            </div>
            <div className="Logo-line">
              <img src={reactLogo} alt="" margin="4rem" height="350px" />{' '}
              <img src={reactLogo} alt="" height="180px" />
            </div>
          </div>
        </div>
        <footer id="App-footer"></footer>
      </div>
    );
  }
}

export default App;
