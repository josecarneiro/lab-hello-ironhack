import React, { Component } from "react";
import Card from "./components/Card.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="black-container">
          <header className="navbar">
            <img src="images/ironhack-logo.svg" className="App-logo" alt="logo" />
            <img src="images/menu-top.svg" className="App-menu" alt="menu" />
          </header>
          <section className="container-top">
            <h1>Say hello to ReactJS</h1>
            <h2>You will learn a Frontend framework from scratch, to become an Ninja Developer.</h2>
            <a href="...">Awesome!</a>
          </section>
        </div>
        <div className="white-container">
          <section className="container-flex">
            <Card img="images/icon1.png" title="Declarative" description="React makes it painless to create interactive UIs."/>
            <Card img="images/icon2.png" title="Components" description="Build encapsulated components that manage their state."/>
            <Card img="images/icon3.png" title="Single-Way" description="A set of immutable values are passed to the component's."/>
            <Card img="images/icon4.png" title="JSX" description="Statically-typed, designed to run on modern browsers."/>
          </section>
        </div>  
      </div>
    );
  }
}

export default App;
