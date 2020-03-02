import React from 'react';

const Components = () => {
  return (
    <div className="main-card">
      <img src={process.env.PUBLIC_URL + '/images/icon2.png'} alt="Components Icon" />
      <h2>Components</h2>
      <p>Build encapsulated components that manage their state.</p>
    </div>
  );
};

export default Components;
