import React from "react";
import logo from "./ironhack-logo.svg";
import "./App.scss";

import ButtonLink from "./components/ButtonLink";
import DeclarativeLink from "./components/DeclaretiveLink";
import ComponentsLink from "./components/ComponentsLink";
import SingleWayLink from "./components/SingleWayLink";
import JsxLink from "./components/JsxLink";

function App() {
  const title = "Say hello to ReactJS";
  const message =
    "You will leran a Frontend framework from stratch, to becoma a Ninja Developer";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="50px" />
        <h1>{title}</h1>
        <p>{message}</p>
        <ButtonLink />
      </header>
      <section>
        <div>
          <DeclarativeLink />
          <ComponentsLink />
          <SingleWayLink />
          <JsxLink />
        </div>
      </section>
    </div>
  );
}

export default App;
