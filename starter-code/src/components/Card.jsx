import React, { Component } from "react";

import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.props.img} className="card-img-top" alt="icon1"/>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Card;
