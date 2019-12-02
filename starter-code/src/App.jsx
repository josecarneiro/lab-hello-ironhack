import React, { Component } from 'react';

import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Feature from './Feature';

import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div className="features">
          <Feature
            image={icon1}
            title="Declarative"
            text="React makes it painless to create interactive UI's"
          />
          <Feature
            image={icon2}
            title="Components"
            text="Build encapsulated components that manage their state."
          />
          <Feature
            image={icon3}
            title="Single Way"
            text="A set of immutable values passed to the components."
          />
          <Feature
            image={icon4}
            title="JSX"
            text="Statically-typed designed to run on modern browsers."
          />
        </div>
      </div>
    );
  }
}

export default App;
