import React from "react";
import logoReact from "./images/react-logo.svg";
import "./App.scss";

import TextTitle from "./components/TextTitle.jsx";
import TextParagraph from "./components/TextParagraph.jsx";
import AwesomeButton from "./components/AwesomeButton.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoReact} className="App-logo" alt="logo" />
          <TextTitle />
          <TextParagraph />
          <AwesomeButton />
        </header>
      </div>
    );
  }
}

export default App;
