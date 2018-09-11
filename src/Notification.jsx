import React from 'react'
import propTypes from 'prop-types'

// child functional component for generating notifications

const GenerateNotification = (props) => {
  return (
    <div className="message system">
      <span className="notificationContent">{props.content}</span>
    </div>
  );
}

export default GenerateNotification;

GenerateNotification.propTypes = {
  content: propTypes.string.isRequired
}