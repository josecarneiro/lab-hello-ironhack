import React from "react";

class Text extends React.Component {
  render() {
    return (
      <div class="white">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img
                src="./images/icon1.png"
                class="img-fluid"
                alt="Responsive image"
              ></img>
            </div>
            <div class="col-sm">
              <img
                src="./images/icon2.png"
                class="img-fluid"
                alt="Responsive image"
              ></img>
            </div>
            <div class="col-sm">
              <img
                src="./images/icon3.png"
                class="img-fluid"
                alt="Responsive image"
              ></img>
            </div>
            <div class="col-sm">
              <img
                src="./images/icon4.png"
                class="img-fluid"
                alt="Responsive image"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Text;
