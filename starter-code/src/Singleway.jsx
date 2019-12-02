import React, { Component } from 'react';
import single from "./icon3.png";

import './Singleway.css';

class Singleway extends Component {
  render() {
    return (
    <div className = "single"><img className = "benimg" src={single}/>
    <h3>Single-Way</h3>
    <p>A set of immutable values are passed to the components.</p>
    </div>
    );
  }
}

export default Singleway;
