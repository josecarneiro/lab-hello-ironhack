import React, { Component } from 'react';
import Header from "./components/Header";
import Card from "./components/Card"
import './index.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="CardContainer" >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
