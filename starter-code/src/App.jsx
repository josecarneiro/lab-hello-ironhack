import React from "react";
import logo from "./logo.svg";
import image1 from "./images/icon1.png";
import image2 from "./images/icon2.png";
import image3 from "./images/icon3.png";

import "./App.scss";

import OneImage from "./components/OneImage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>
            Say hello to <br /> ReactJS
          </h1>
          <span>
            You will learn a Frontend <br />
            framework from scratch, to <br /> become a Ninja Developer.
          </span>
          <br />
          <button className="Awesome-btn">Awesome</button>
        </header>
        <div className="Images">
          <div>
            <img src={image1} className="image1" alt="image1" />
            <h2>Declarative</h2>
            <p>
              React makes it <br /> painless to create <br /> interactive UIs
            </p>
          </div>
          <div>
            <img src={image2} className="image2" alt="image2" />
            <h2>Compponents</h2>
            <p>
              Build encapsulated <br /> components that <br /> manage their
              state.
            </p>
          </div>
          <div>
            <img src={image3} className="image3" alt="image3" />
            <h2>Single-Way</h2>
            <p>
              A set of immutable <br /> values are passed to <br /> the
              component's
            </p>
          </div>
          <OneImage />
          {/* <div>
            <img src={image4} className="image4" alt="image4" />
            <h2>JSX</h2>
            <p>
              Statically-typed, <br /> designed to run on <br /> modern
              browsers.
            </p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
