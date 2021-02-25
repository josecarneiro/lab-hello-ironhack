import React from 'react';
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={process.env.PUBLIC_URL + '/images/ironhack-logo.svg'} />
      <img src={process.env.PUBLIC_URL + '/images/menu-top.svg'} />
    </nav>
  );
};

export default Navbar;
