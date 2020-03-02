import React, { Component } from 'react';
//import ironhackLogo from '../public/images/ironhack-logo.svg';
import './App.css';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="ironhackLogo" src="./images/ironhack-logo.svg" />
          <img className="nav" src="./images/menu-top.svg" />
          <div className="containerText">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn a Frontend framework from scrach, to became an Ninka Developer.</p>
            <form>
              <button className="button" type="submit">
                Awesome!
              </button>
            </form>
          </div>
        </header>
        <div className="containerImg">
          <div>
            <img src={icon1}></img>
            <h4>Declarative</h4>
            <p>React makes it painles to create interactive UIs.</p>
          </div>
          <div>
            <img src={icon2}></img>
            <h4>Componentes</h4>
            <p>Build encapsulated componentes that manage their state</p>
          </div>
          <div>
            <img src={icon3}></img>
            <h4>Single-Way</h4>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div>
            <img src={icon4}></img>
            <h4>JSX</h4>
            <p>Statically-typed. designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
