import React, {Component} from 'react'

// child functional component for generating notifications

const GenerateNotification = (props) => {
  return (
    <div className="message system">
      <span className="notificationContent">{props.content}</span>
    </div>
  );
}

export default GenerateNotification;