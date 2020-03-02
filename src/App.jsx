import React, { Component } from 'react';
import logo from './images/ironhack-logo.svg';
import menutop from './images/menu-top.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <nav className="App-NavBar">
           <img src={logo} className="App-logo" alt="logo" />
           <img src={menutop} className="App-menu" alt="logo" />  
        </nav>

        <header className="App-header">
          
          <div className="App-header-content">
          
          <h1>
            Say hello to <br />
            ReactJS
          <p>
            You will learn a Frontend <br />
            framework from scratch, to <br />
              become an Ninka Developer
          </p>
          
          </h1>
          
          <button><a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Awesome!
          </a>
          </button>

          </div>
        </header>
      </div>
    );
  }
}

export default App;

