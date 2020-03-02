import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <img
              className="ironhacklogo"
              src={process.env.PUBLIC_URL + './images/ironhack-logo.svg'}
            />
            <img className="menutop" src={process.env.PUBLIC_URL + './images/menu-top.svg'} />
          </nav>
          <h1>
            <bold>Say hello to ReactJS</bold>
          </h1>
          <h3>You will learn a Frontend framework from scratch, to become an Ninja Developer.</h3>
          <button className="button">Awesome!</button>
        </header>

        <div className="App-body">
          <section>
            <img class="declarativeimg" src={process.env.PUBLIC_URL + './images/icon1.png'} />
            <h5>Declarative</h5>
            <p>React makes it painless to create interactive UIs.</p>
          </section>

          <section>
            <img class="componentsimg" src={process.env.PUBLIC_URL + './images/icon2.png'} />
            <h5>Components</h5>
            <p>Build encapsulated components that manage their state.</p>
          </section>

          <section>
            <img class="singlewayimg" src={process.env.PUBLIC_URL + './images/icon3.png'} />
            <h5>Single-Way</h5>
            <p>A set of immutable values are passed to the component's.</p>
          </section>

          <section>
            <img class="JSXimg" src={process.env.PUBLIC_URL + './images/icon4.png'} />
            <h5>JSX</h5>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
