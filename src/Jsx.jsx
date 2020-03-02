import React from 'react';

const Declarative = () => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/images/icon4.png'} alt="IronHack logo" />
      <h3>JSX</h3>
      <p>Statically-typed,</p>
      <p>designed to run on</p>
      <p>modern browsers.</p>
    </div>
  );
};

export default Declarative;
