import React, { Component } from 'react';
import logo from '../images/ironhack-logo.svg';
import menu from '../images/menu-top.svg'

class Navbar extends Component {
    render() {
      return (
        <div className="App">
            <nav>
                <img src={logo} alt="ironhack-logo"/>
                <img src={menu} alt="menu-top"/>
            </nav>
        </div>
      );
    }
}    

export default Navbar;