import React from 'react';
import propTypes from 'prop-types'

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


GenerateMessage.propTypes = {
  username: propTypes.string.isRequired,
  message: propTypes.string.isRequired
}