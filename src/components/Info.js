import React from 'react';

const Info = () => {
  return (
    <div className="App-info">
      <div className="card">
        <img src="images/icon1.png" alt="Declarative icon" />
        <h4>Declarative</h4>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="card">
        <img src="images/icon2.png" alt="Components icon" />
        <h4>Components</h4>
        <p>Build encapsulate components that manage their state.</p>
      </div>
      <div className="card">
        <img src="images/icon3.png" alt="Single-Way icon" />
        <h4>Single-Way</h4>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div className="card">
        <img src="images/icon4.png" alt="JSX icon" />
        <h4>JSX</h4>
        <p>Statically-typed, designed to run on modern browsers</p>
      </div>
    </div>
  );
};

export default Info;