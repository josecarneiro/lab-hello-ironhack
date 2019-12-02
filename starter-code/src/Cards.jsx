import React, { Component } from "react";
import first from "./images/icon1.png";
import second from "./images/icon2.png";
import third from "./images/icon3.png";
import forth from "./images/icon4.png";

export class Cards extends Component {
  render() {
    return (
      <div>
        <img src={first} alt=""></img>
        <img src={second} alt=""></img>
        <img src={third} alt=""></img>
        <img src={forth} alt=""></img>
      </div>
    );
  }
}

export default Cards;
