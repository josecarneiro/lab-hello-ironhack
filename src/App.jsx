import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import AppDelcarative from './AppDeclarative';
import AppComponents from './AppComponents';
import AppSingleWay from './AppSingleWay';
import AppJSX from './AppJSX';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./images/ironhack-logo.svg" alt="" />
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
        </header>
        <body className="App-body">
          <AppDelcarative />
          <AppComponents />
          <AppSingleWay />
          <AppJSX />
        </body>
      </div>
    );
  }
}

export default App;
