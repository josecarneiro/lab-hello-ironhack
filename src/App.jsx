import React, { Component } from 'react';
import logo from './images/ironhack-logo.svg';
import menutop from './images/menu-top.svg';

import './App.css';
import AppHeader from './AppHeader'
import AppIcons from './AppIcons'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <nav className="App-NavBar">
           <img src={logo} className="App-logo" alt="logo" />
           <img src={menutop} className="App-menu" alt="logo" />  
        </nav>

        <AppHeader />

        <AppIcons />
    
      
      </div>
    );
  }
}

export default App;

