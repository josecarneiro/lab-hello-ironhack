import React, { Component } from 'react';
import logo from './logo.svg';
import Message from './components/Message';
import SubMessage from './components/SubMessage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="backgroundColor">
          <header className="App-header">
            <nav>
              <img
                src="./images/ironhack-logo.svg"
                className="App-logo"
                alt="logo"
              />
              <img
                src="./images/menu-top.svg"
                className="App-logo"
                alt="logo"
              />
            </nav>
            <p className="left">
              <Message
                text="Say Hello to ReactJS"
                subText="You will learn a Frontend framework from scratch, to become a Ninka Developer"
              />
            </p>
          </header>
        </div>
        <div className="imageLayout">
          <SubMessage
            img="./images/icon1.png"
            title="Declarative"
            text="Some Text"
          />

          <SubMessage
            img="./images/icon2.png"
            title="Components"
            text="Some Text"
          />
          <SubMessage
            img="./images/icon3.png"
            title="Single-Way"
            text="Some Text"
          />

          <SubMessage img="./images/icon4.png" title="JSX" text="Some Text" />
        </div>
      </div>
    );
  }
}

export default App;
