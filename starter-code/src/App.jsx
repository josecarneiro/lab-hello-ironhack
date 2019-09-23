import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import DocumentationLink from "./components/DocumentationLink";
import Button from "./components/Button";
import Text from "./components/Text";
import Images from "./components/Images";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Text />
          <Button />
          <div class="white">
            <Images />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
