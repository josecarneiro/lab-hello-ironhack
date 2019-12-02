import React, { Component } from 'react';

import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import Button from './Button';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Main />
        </header>
        <div>
          <Button />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
