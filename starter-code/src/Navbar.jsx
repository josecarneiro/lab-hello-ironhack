import React, { Component } from 'react';
//import ironLogo from '../images/ironhack-logo.svg';

class Navbar extends Component {
    render () {
        return (
            <div className='navigation'>
                <img src='./images/ironhack-logo.svg' className="Iron-logo" alt="logo" />
                <img src='./images/menu-top.svg' className="menu-nav" alt="menu" />
            </div>
        );
    }
}

export default Navbar;