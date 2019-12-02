import React, { Component } from 'react';
import declare from "./icon1.png";

import './Declarative.css';

class Declarative extends Component {
  render() {
    return (
    <div className = "declare"><img className = "benimg" src={declare}/>
     <h3>Declarative</h3>
    <p>React makes it painless to create interative UIs</p>
    </div>
    );
  }
}

export default Declarative;
