import React from "react";

class ImagesGrid extends React.Component {
  render() {
    return (
      <div className="container" heigth="500px">
        <div className="row">
          <div className="col-sm">
            <img src="./images/icon1.png" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="col-sm">
            <img src="./images/icon2.png" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div className="col-sm">
            <img src="./images/icon3.png" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's</p>
          </div>
          <div className="col-sm">
            <img src="./images/icon4.png" />
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern borwsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ImagesGrid;
