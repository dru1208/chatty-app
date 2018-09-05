import React, {Component} from 'react';

const GenerateMessage = (props) => {
  return (
    <div className="message">
      <span className="message-username">{props.username}</span>
      <span className="message-content">{props.message}</span>
    </div>
  );
}

export default GenerateMessage;