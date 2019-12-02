import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <img src="/images/icon1.png" className="icon1" alt="icon1 img" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div>
          <img src="/images/icon2.png" className="icon2" alt="icon2 img" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src="/images/icon3.png" className="icon3" alt="icon3 img" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div>
          <img src="/images/icon4.png" className="icon4" alt="icon4 img" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run modern browsers.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
