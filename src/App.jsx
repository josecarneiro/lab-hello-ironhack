import React, { Component } from 'react';


import './App.css';
import AppNavBar from './component/AppNavBar';
import AppMessage from './component/AppMessage';
import AppBody from './component/AppBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
        <div className="App-navbar">
 						<AppNavBar />
 					</div>
           <div className="App-message">
 						<AppMessage />
 					</div>
        </header>
        <AppBody />
      </div>
    );
  }
}

export default App;
