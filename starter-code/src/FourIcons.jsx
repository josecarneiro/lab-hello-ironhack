import React, { Component } from 'react';
import './FourIcons.css';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';

class FourIcons extends Component {
  render() {
    return (
      <div className="DivContainer">
        <div className="IconsContainer">
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
          <img src={icon4} alt="" />
        </div>

        <div className="TitlesContainer">
          <div className="Seperator">
            <h3 className="titleH3">Declarative</h3>
            <p className="TextP">
              React makes it painless to create interactive UIs
            </p>
          </div>

          <div className="Seperator">
            <h3 className="titleH3">Components</h3>
            <p className="TextP">
              Build encapsulated components that manage their state
            </p>
          </div>

          <div className="Seperator">
            <h3 className="titleH3">Single-way</h3>
            <p className="TextP">
              A set of immutable values are passed to the component's.
            </p>
          </div>

          <div className="Seperator">
            <h3 className="titleH3">JSX</h3>
            <p className="TextP">
              Statically typed, designed to run on modern browsers
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FourIcons;
