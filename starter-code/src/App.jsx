import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import SectionHero from './components/SectionHero';
import SectionFeatures from './components/SectionFeatures';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SectionHero/>
        <SectionFeatures />
      </div>
    );
  }
}

export default App;
