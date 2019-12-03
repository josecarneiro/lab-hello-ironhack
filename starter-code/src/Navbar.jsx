import React, { Component } from "react";
import logo from './images/ironhack-logo.svg';

import './Navbar.css'

class Navbar extends Component {
    render () {
        return (
            <div className="navbar">
                <img src="./images/ironhack-logo.svg" className="ih-logo" alt="Ironhack logo by link" />
                <img src="logo" alt="Ironhack logo by import"/>
                <img src="./images/menu-top.svg" className="menu-img" alt="Ironhack Logo" />  
                <img src="./ironhack-logo-2.svg" alt="copy of image in other folder"/>            
            </div>
        )
    }
};

export default Navbar;