import React from 'react';

const SingleWay = () => {
  return (
    <div className="main-card">
      <img src={process.env.PUBLIC_URL + '/images/icon3.png'} alt="Single-Way Icon" />
      <h2>Single-Way</h2>
      <p>A set of immutable values are passed to the components.</p>
    </div>
  );
};

export default SingleWay;
