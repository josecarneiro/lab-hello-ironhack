import React, { Component } from "react";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";








class Body extends Component {
  render() {
    return (
    <div className="Body">
    <div className="Icons">
    <img src={icon1} />
    <h3>Declarative</h3>
    <p>React makes it painless to create interactives UI's </p>
    </div>
    <div className="Icons">
    <img src={icon2} />
    <h3>Components</h3>
    <p>React makes it painless to create interactives UI's </p>
    </div>
    <div className="Icons">
    <img src={icon3} />
    <h3>Single-Way</h3>
    <p>React makes it painless to create interactives UI's </p>
    </div>
    <div className="Icons">
    <img src={icon4} />
    <h3>JSX</h3>
    <p>React makes it painless to create interactives UI's </p>
    </div>
   </div>
    )
  }
}

export default Body;
