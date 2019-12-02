import React, { Component } from 'react';

class Card extends Component {
  render(){
    return(
    <div className="card">
      <img src="/images/icon1.png" alt="not found"/>
      <h1>This is a card title</h1>
      <p>Description of the Card</p>
    
    </div>);
  };
}

export default Card;
