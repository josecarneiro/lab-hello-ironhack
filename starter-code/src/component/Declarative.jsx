import React from "react";
import "./../App.css";
import icon1 from "./../images/icon1.png";
import icon2 from "./../images/icon2.png";
import icon3 from "./../images/icon3.png";
import icon4 from "./../images/icon4.png";

class Declarative extends React.Component {
  render() {
    return (
      <div class="icons">
        <div class="icon1">
          <img src={icon1} alt="logo" />
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div class="icon2">
          <img src={icon2} alt="logo" />
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div class="icon3">
          <img src={icon3} alt="logo" />
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div class="icon4">
          <img src={icon4} alt="logo" />
          <p>React makes it painless to create interactive UIs</p>
        </div>
      </div>
    );
  }
}

export default Declarative;
