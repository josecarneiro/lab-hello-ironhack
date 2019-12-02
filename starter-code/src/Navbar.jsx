import React, { Component } from "react";
// import logo from './images/ironhack-logo.svg'

import './Navbar.css'

class Navbar extends Component {
    render () {
        return (
            <div className="navbar">
                <img src="./images/ironhack-logo.svg" className="ih-logo" alt="Ironhack Logo" />
                <img src="./images/menu-top.svg" className="menu-img" alt="Ironhack Logo" />              
            </div>
        )
    }
};

export default Navbar;