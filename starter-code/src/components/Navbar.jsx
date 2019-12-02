import React from 'react'

import logo from "../images/ironhack-logo.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark px-5 pb-3">
        <a className="navbar-brand" href="#">
          <img src={logo} width="50" height="50" alt="" />
        </a>
      </nav>
    </div>
  )
}

export default Navbar
