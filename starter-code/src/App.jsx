import React, { Component } from "react";
import Button from "./components/button";
import Section from "./components/section";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <nav>
            <img src='./images/ironhack-logo.svg' className='' alt='logo' />

            <img src='./images/menu-top.svg' alt='logo' />
          </nav>
          <div className='firstSection'>
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch, to become an
              Ninka Developer
            </p>
            <Button></Button>
          </div>
        </header>
        <Section></Section>
      </div>
    );
  }
}

export default App;
