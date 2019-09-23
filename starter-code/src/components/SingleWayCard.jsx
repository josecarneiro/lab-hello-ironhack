import React from "react";
import icon from "./../icon3.png";

class SingleWayCard extends React.Component {
  render() {
    return (
      <div className="Card">
        <img
          src={icon}
          alt="React uses single-way values"
          className="Card-image"
        />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the components.</p>
      </div>
    );
  }
}

export default SingleWayCard;
