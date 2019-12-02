import React, { Component } from 'react';

import './App.scss';
import Navbar from './Navbar';
import Heading from './Heading';
import SectionMain from './SectionMain'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        < Heading /> 
        < SectionMain />
      </div>
    );
  }
}

export default App;
