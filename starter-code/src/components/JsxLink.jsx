import React from "react";
import icon from "./icon4.png";

class JsxLink extends React.Component {
  render() {
    const title = "JSX";
    const message = "Statically-typed, designed to run on modern browsers.";

    return (
      <div>
        <img src={icon} className="logo-one" alt="logo-one" />
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    );
  }
}

export default JsxLink;
