import React, {Component} from 'react';

// child functional component for dynamically generating message to be placed in message list

const GenerateMessage = (props) => {
  return (
    <div className="message">
      <span className="message-username">{props.username}</span>
      <span className="message-content" dangerouslySetInnerHTML={{__html: props.message}}></span>
    </div>
  );
}

export default GenerateMessage;
