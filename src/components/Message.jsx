import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div className="messageContent">
        <h1>{this.props.text}</h1>
        <h3>{this.props.subText}</h3>
        <button>Awesome</button>
      </div>
    );
  }
}

export default Message;
