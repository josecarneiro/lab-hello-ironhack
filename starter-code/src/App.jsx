import React, { Component } from 'react';
import ironhack_logo from './images/ironhack-logo.svg';
import menu_top from './images/menu-top.svg';
import Section from './Section';
import './App.css';
import './section.css';

const message = 'Say hello to ReactJS';
const btn_message = 'Awsome!';
const header_message = 'You will learn a frontend Framework';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <figure className="ironhack">
            <img src={ironhack_logo} alt="ironhack_logo " />
          </figure>
          <figure className="menu">
            <img src={menu_top} alt="menu_top " />
          </figure>
        </nav>
        <header className="App-header">
          <p>{message}</p>
          <p> {header_message}</p>
          <button>{btn_message}</button>
        </header>
        <Section />
      </div>
    );
  }
}

export default App;
