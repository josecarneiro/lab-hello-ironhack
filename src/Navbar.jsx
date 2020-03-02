import React, { Component } from 'react';

import './App.css';

function Navbar() {
  return (
    <nav class="navbar">
      <img src="./images/ironhack-logo.svg" className="ironHackLogo" alt="IronHackLogo" />
      <img src="./images/menu-top.svg" className="menu-icon" alt="MenuIcon" />
    </nav>
  );
}

export default Navbar;
