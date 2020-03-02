import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    <header className="App-header">
      <div>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn front-end framework from scratch, to become a ninja developer!</p>
        <Button />
      </div>
    </header>
  );
};

export default Header;
