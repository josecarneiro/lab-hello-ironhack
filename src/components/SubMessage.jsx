import React from 'react';

class SubMessage extends React.Component {
  render() {
    return (
      <div className="textImage">
        <img src={this.props.img} className="App-logo" alt="logo" />
        <h2>{this.props.title}</h2>
        <h4>{this.props.text}</h4>
      </div>
    );
  }
}

export default SubMessage;
