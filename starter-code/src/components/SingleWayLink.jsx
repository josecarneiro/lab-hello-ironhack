import React from "react";
import icon from "./icon3.png";

class SingleWayLink extends React.Component {
  render() {
    const title = "Single-Way";
    const message = "A set of immutable values are passed to the component's.";

    return (
      <div>
        <img src={icon} className="logo-one" alt="logo-one" />
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    );
  }
}

export default SingleWayLink;
