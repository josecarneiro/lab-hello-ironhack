import React, { Component } from 'react';
import logo from './images/ironhack-logo.svg';
import menu from './images/menu-top.svg'
import declarative from './images/icon1.png'
import components from './images/icon2.png'
import singleWay from './images/icon3.png'
import jsx from './images/icon4.png'
import Navbar from './components/Navbar.jsx'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
        <div className='First'>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to became a Ninja Developer.</p>
          <button>Awesome!</button>

        </div>
        <div className='Last'>
          <div className='cards'>
            <img src={declarative} alt="menu-top"/>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className='cards'>
            <img src={components} alt="menu-top"/>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className='cards'>
            <img src={singleWay} alt="menu-top"/>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div className='cards'>
            <img src={jsx} alt="menu-top"/>
            <h2>JSX</h2>
            <p>Stativally-typed, designed to run on modern browsers.</p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
