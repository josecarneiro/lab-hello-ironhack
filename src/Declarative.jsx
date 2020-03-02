import React from 'react';

const Declarative = () => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/images/icon1.png'} alt="IronHack logo" />
      <h3>Declarative</h3>
      <p>React makes it</p>
      <p>painless to create</p>
      <p>interactive UIs.</p>
    </div>
  );
};

export default Declarative;
