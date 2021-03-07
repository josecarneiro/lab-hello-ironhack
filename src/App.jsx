import React, { Component } from 'react';

import './App.css';

const PresentationItem = (props) => {
  return (
    <div className="presentation-item">
      <img src={props.icon} alt="declarative icon" />
      <h2 className="item-title">{props.itemTitle}</h2>
      <p className="item-text">{props.itemText}</p>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="hero-section">
            <div className="hero-nav">
              <ul>
               <li>
                  <img src="./images/ironhack-logo.svg" alt="logo Ironhack" />
                </li>
                <li>
                  <img src="./images/menu-top.svg" alt="menu toggle button" />
                </li>
              </ul>
            </div>
            <div className="hero-information">
              <div className="hero-information-left">
                <h1 className="hero-title">
                  Say Hello to <br /> ReactJS
                </h1>
                <p className="hero-subtitle">
                  You will learn a Frontend <br /> framework from scratch,{' '}
                  <br /> to become a Master Developer.
                </p>
              </div>
              <div className="hero-information-right"></div>
              <div>
                <button className="hero-button" type="button">
                  Awesome!
                </button>
              </div>
            </div>
          </div>

          <div className="presentation-section">
            <PresentationItem
              icon="./images/icon1.png"
              itemTitle="Declarative"
              itemText="React makes it painless to create interactive UIs."
            />
            <PresentationItem
              icon="./images/icon2.png"
              itemTitle="Components"
              itemText="Build encapsulated components that manage their state."
            />
            <PresentationItem
              icon="./images/icon3.png"
              itemTitle="Single-Way"
              itemText="A set of immutable values are passed to the component's."
            />
            <PresentationItem
              icon="./images/icon4.png"
              itemTitle="JSX"
              itemText="Statically-types, designed to run on modern browsers."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
