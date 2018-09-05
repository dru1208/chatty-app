import React, {Component} from 'react'

const GenerateNotification = (props) => {
  return (
    <div className="message system">
      <span className="notificationContent">{props.content}</span>
    </div>
  );
}

export default GenerateNotification;