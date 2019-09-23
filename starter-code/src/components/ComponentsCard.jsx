import React from "react";
import icon from "./../icon2.png";

class ComponentsCard extends React.Component {
  render() {
    return (
      <div className="Card">
        <img src={icon} alt="React uses components" className="Card-image" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
    );
  }
}

export default ComponentsCard;
