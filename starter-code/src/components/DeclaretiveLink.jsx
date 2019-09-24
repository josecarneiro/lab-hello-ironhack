import React from "react";
import icon from "./icon1.png";

class DeclarativeLink extends React.Component {
  render() {
    const title = "Declerative";
    const message = "React makes it painless to create interective UIs.";

    return (
      <div>
        <img src={icon} className="logo-one" alt="logo-one" />
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    );
  }
}

export default DeclarativeLink;
