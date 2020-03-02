import React, { Component } from 'react';

import './App.css';

import Declarative from './Declarative';
import Components from './Components';
import SingleWay from './SingleWay';
import Jsx from './Jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <img src={process.env.PUBLIC_URL + '/images/ironhack-logo.svg'} alt="IronHack logo" />
            <img src={process.env.PUBLIC_URL + '/images/menu-top.svg'} alt="menu" />
          </nav>
          <section>
            <h1>Say Hello to ReactJS</h1>
            <p>You will learn a Frontend framework from scratch, to bacame an Ninka Developer</p>
            <button>Awesome!</button>
          </section>
        </header>

        <main>
          <Declarative />
          <Components />
          <SingleWay />
          <Jsx />
        </main>
      </div>
    );
  }
}

export default App;
