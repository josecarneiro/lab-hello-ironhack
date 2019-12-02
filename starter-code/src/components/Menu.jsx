import React, { Component } from 'react';
import './Menu.css';

import icon1 from './../images/icon1.png';
import icon2 from './../images/icon2.png';
import icon3 from './../images/icon3.png';
import icon4 from './../images/icon4.png';

class Menu extends Component {
    render() {
        return( 
<div className='menu'>
    <div className='card'><img src={icon1}></img><h3 class='title'>Declarative</h3><div className='info'>React makes it painless to create interactive UIs.</div></div>
    <div className='card'><img src={icon2}></img><h3 class='title'>Components</h3><div className='info'>Build encapuslaed components that manage their state.</div></div>
    <div className='card'><img src={icon3}></img><h3 class='title'>Single-Way</h3><div className='info'>A set of immutable values are passed to the component's. </div></div>
    <div className='card'><img src={icon4}></img><h3 class='title'>JSX</h3><div className='info'>Statically-typed, designed to run on modern browsers.</div></div>
</div>
        )
    }
}

export default Menu;