import React from "react";
import "./App.css";
import IconSection from "../src/components/iconSection";

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <h1>
            Say Hello to <br></br>react Js
          </h1>
          <h3>you will learn a frontend library from scratch</h3>
          <button>awsome!</button>
        </header>
      </div>
      <div>
        <IconSection />
      </div>
    </div>
  );
}

export default App;
