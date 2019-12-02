import React, { Component } from 'react';
import './Background.css';
import logoIcon from './logo192.png';
import logoIcon2 from './logo512.png';

class Background extends Component {
  render() {
    return (
      <div className="BackgroundIcon">
        <img className="LogoIcon" src={logoIcon} alt="" />
        <img className="LogoIcon2" src={logoIcon2} alt="" />
        <img className="LogoIcon2" src={logoIcon2} alt="" />
      </div>
    );
  }
}

export default Background;
