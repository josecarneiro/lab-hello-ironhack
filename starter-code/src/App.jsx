import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Nav'
import Button from './Button'
import Declarative from './Declarative'
import Components from './Components'
import Singleway from './Singleway'
import Jsx from './Jsx'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
       <Nav/>
        <header className = "App-header">
          <h1>Say Hello to ReactJS</h1>
          <p> You will learn a Frontend Framework from scratch to become an Ninja Developer.</p>
          <Button/>
        </header>
        <div className = "benifits">
          <Declarative/>
          <Components/>
          <Singleway/>
          <Jsx/>
        </div>
      </div>
    );
  }
}

export default App;
