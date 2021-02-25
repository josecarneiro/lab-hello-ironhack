import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={process.env.PUBLIC_URL + '/images/icon1.png'} />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="card">
        <img src={process.env.PUBLIC_URL + '/images/icon2.png'} />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state</p>
      </div>
      <div className="card">
        <img src={process.env.PUBLIC_URL + '/images/icon3.png'} />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div className="card">
        <img src={process.env.PUBLIC_URL + '/images/icon4.png'} />
        <h3>JSX</h3>
        <p>Statically-typed, dessigned to run on modern browsers.</p>
      </div>
    </div>
  );
};

export default Features;
