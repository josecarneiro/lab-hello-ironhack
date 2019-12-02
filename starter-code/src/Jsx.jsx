import React, { Component } from 'react';
import jsx from "./icon4.png";

import './Jsx.css';

class Jsx extends Component {
  render() {
    return (
    <div className = "jsx"><img className = "benimg" src={jsx}/>
     <h3>JSX</h3>
    <p>Statically typed, designed to run on modern browsers.</p>
    </div>
    );
  }
}

export default Jsx;
