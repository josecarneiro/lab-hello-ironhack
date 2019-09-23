import React from "react";
import icon from "./../icon1.png";

class DeclarativeCard extends React.Component {
  render() {
    return (
      <div className="Card">
        <img src={icon} alt="React is declarative" className="Card-image" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
    );
  }
}

export default DeclarativeCard;
