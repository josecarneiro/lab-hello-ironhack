import React, { Component } from 'react';
import comp from "./icon2.png";

import './Components.css';

class Components extends Component {
  render() {
    return (
    <div className = "components"><img className = "benimg" src={comp}/>
     <h3>Components</h3>
    <p>Build encapsulated components that manage their state</p>
    </div>
    );
  }
}

export default Components;
