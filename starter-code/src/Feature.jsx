import React, { Component } from 'react';

class Feature extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="feature">
        <img src={this.props.image} alt="logo" />
        <h3>{this.props.title}</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Feature;
