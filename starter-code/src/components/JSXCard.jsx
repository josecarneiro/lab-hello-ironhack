import React from "react";
import icon from "./../icon4.png";

class ComponentsCard extends React.Component {
  render() {
    return (
      <div className="Card">
        <img src={icon} alt="React uses JSX" className="Card-image" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    );
  }
}

export default ComponentsCard;
