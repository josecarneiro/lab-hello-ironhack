import React from "react";
// import logo from "./logo.svg";
import IHlogo from "./ironhack-logo.svg";
import hamMenu from "./menu-top.svg";
import "./App.css";
import DeclarativeCard from "./components/DeclarativeCard";
import ComponentsCard from "./components/ComponentsCard";
import SingleWayCard from "./components/SingleWayCard";
import JSXCard from "./components/JSXCard";

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <div>
          <img src={IHlogo} alt="Ironhack logo" />
        </div>
        <div>
          <img src={hamMenu} alt="hamburger menu" />
        </div>
      </nav>
      <header className="App-header">
        <h1 className="Say-hello">Say hello to ReactJS</h1>
        <h3 className="Header-desc">
          You will learn a Frontend framework from scratch, to become an Awesome
          Developer.
        </h3>
        <span className="Awesome-button">Awesome!</span>
      </header>
      <div className="Advantages">
        <DeclarativeCard />
        <ComponentsCard />
        <SingleWayCard />
        <JSXCard />
      </div>
    </div>
  );
}

export default App;
