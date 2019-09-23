import React from "react";
import image4 from "../images/icon4.png";

class OneImage extends React.Component {
  render() {
    return (
      <div>
        <img src={image4} className="image4" alt="image4" />
        <h2>JSX</h2>
        <p>
          Statically-typed, <br /> designed to run on <br /> modern browsers.
        </p>
      </div>
    );
  }
}

export default OneImage;
