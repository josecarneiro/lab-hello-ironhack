import React from 'react';

const Declarative = () => {
  return (
    <div className="main-card">
      <img src={process.env.PUBLIC_URL + '/images/icon1.png'} alt="Declarative Icon" />
      <h2>Declarative</h2>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
  );
};

export default Declarative;
