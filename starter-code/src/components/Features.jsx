import React, { Component } from "react";
import icon1 from "./../assets/images/icon1.png";
import icon2 from "./../assets/images/icon1.png";
import icon3 from "./../assets/images/icon1.png";
import icon4 from "./../assets/images/icon1.png";

class Features extends Component {
  render() {
    return (
      <div className="features h-100">
        <div className="feature w-75 mx-auto h-100 pt-5 m-5 d-flex justify-content-center align-items-center">
          <div className="m-5">
            <img src={icon1} alt=""/>
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="m-5">
            <img src={icon2} alt=""/>
            <h4>Components</h4>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div className="m-5">
            <img src={icon3} alt=""/>
            <h4>Single-Way</h4>
            <p>A set of immutable values are passed to the component's</p>
          </div>
          <div className="m-5">
            <img src={icon4} alt=""/>
            <h4>JSX</h4>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;