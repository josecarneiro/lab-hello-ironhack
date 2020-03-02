import React from 'react';

const JSX = () => {
  return (
    <div className="main-card">
      <img src={process.env.PUBLIC_URL + '/images/icon4.png'} alt="JSX Icon" />
      <h2>JSX</h2>
      <p>Statically-typed designed to run on modern browsers.</p>
    </div>
  );
};

export default JSX;
