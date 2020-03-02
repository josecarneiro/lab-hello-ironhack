import React from 'react';

const Declarative = () => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/images/icon2.png'} alt="IronHack logo" />
      <h3>Components</h3>
      <p>Build Encapsulated</p>
      <p>components that</p>
      <p>manage their state</p>
    </div>
  );
};

export default Declarative;
