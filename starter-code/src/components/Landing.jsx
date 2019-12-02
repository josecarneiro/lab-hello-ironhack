import React, { Component } from "react";
import "./Landing.css";

class Body extends Component {
  render() {
    return (
      <main className="App-body">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become a high-flying Ninja Developer (who can spell)!</p>
        <a className="btn-white" href="/">Awesome!</a>
      </main>
    );
  }
}

export default Body;
