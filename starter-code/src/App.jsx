import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header"
import Navbar from "./Navbar"
import Cards from "./Cards"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
     <Header />
        <Cards/>
      </div>
    );
  }
}
export default App;
