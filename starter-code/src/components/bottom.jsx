import React from 'react';
import { Component } from 'react';
import './bottom.css';
import icon1 from './../images/icon1.png';
import icon2 from './../images/icon2.png';
import icon3 from './../images/icon3.png';
import icon4 from './../images/icon4.png';

class Bottom extends Component {
  render() {
    return (
      <div className="footer-thing">
        <div className="icon-box">
          <img src={icon1} alt="" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="icon-box">
          <img src={icon2} alt="" />
          <h3>Components</h3>
          <p>Build encapsulated components for pure fun</p>
        </div>
        <div className="icon-box">
          <img src={icon3} alt="" />
          <h3>Single-way</h3>
          <p>No round trips with react</p>
        </div>
        <div className="icon-box">
          <img src={icon4} alt="" />
          <h3>JSX</h3>
          <p>Freddy Kruegger VS Jason X </p>
        </div>
      </div>
    );
  }
}

export default Bottom;
