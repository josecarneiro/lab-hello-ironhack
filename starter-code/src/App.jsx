import React from "react";
import "./App.css";

import Logo from "./components/Logo";
import HelloHeader from "./components/HelloHeader";
import TagLine from "./components/TagLineParagraph";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <HelloHeader />
        <TagLine />
        Learn React
      </header>
    </div>
  );
}

export default App;
