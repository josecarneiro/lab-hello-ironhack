import React from "react";

import "./App.css";
import SayHello from "./component/SayHello";
import NinkaDeveloper from "./component/NinkaDeveloper";
import Awesome from "./component/Awesome";
import Navbar from "./component/Navbar";
import Declarative from "./component/Declarative";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <SayHello />
        <NinkaDeveloper />
        <Awesome />
      </header>
      <Declarative />
    </div>
  );
}

export default App;
