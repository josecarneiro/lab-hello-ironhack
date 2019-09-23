import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import DocumentationLInk from "./components/DocumentationLink";
import Button from "./components/Button";
import ImagesGrid from "./components/ImagesGrid";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header d-flex align-items-lg-baseline">
          <h1 className="display-4">Say hello to ReactJS</h1>
          <p className="lead">
            You will learn Frontend framework from scratch, to became a Ninja
            Developer
          </p>

          <Button />
        </header>

        <ImagesGrid />
      </div>
    );
  }
}

export default App;
