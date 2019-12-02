
import React, { Component } from 'react';
import './Navbar.css';

import menu from './images/menu-top.svg';
import ironhack from './images/ironhack-logo.svg';


class Navbar extends Component {
    render() {
        return( 
<nav className='navbar'>
    <img src={ironhack} className='logo'></img>
    <img src={menu} className='logo'></img>
</nav>
        )
    }
}

export default Navbar;