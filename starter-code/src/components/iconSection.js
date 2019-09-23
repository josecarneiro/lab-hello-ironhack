import React, { Component } from "react";
import "../App.css";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

export class IconSection extends Component {
  render() {
    return (
      <div class="iconSection">
        <h1>asdsada</h1>
        <div class="grid">
          <div class="card">
            <img src={icon1} alt="Logo" />
            <h3>Declarative</h3>
            <p class="pp">React makes it painless to reuse components</p>
          </div>
          <div class="card">
            <img src={icon2} alt="Logo" />
            <h3>Componets</h3>
            <p>
              {" "}
              class='pp'Build encapsulated componets that save their state.
            </p>
          </div>
          <div class="card">
            <img src={icon3} alt="Logo" />
            <h3>Single-way</h3>
            <p class="pp">
              A set of immutable compontess are passed into the component
            </p>
          </div>
          <div class="card">
            <img src={icon4} alt="Logo" />
            <h3>JSX</h3>
            <p class="pp">
              Staticly typed designed to work on modern browsers.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default IconSection;
