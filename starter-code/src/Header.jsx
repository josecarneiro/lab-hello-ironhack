import React, { Component } from 'react';
import Button from './Button';

class Header extends Component {
  render() {
    return (
      <header className="appHeader dark-color">
        <h1>
          Say hello to
          <br />
          ReactJS
        </h1>
        <p>
          You will learn a framework from scratch to become a ninja developer!
        </p>
        <Button></Button>
      </header>
    );
  }
}

export default Header;
