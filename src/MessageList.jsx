import React, {Component} from 'react';
import GenerateMessage from './Message.jsx'
import GenerateNotification from './Notification.jsx'

// child functional component for dynamically generating message list with username and message

const GenerateMessageList = (props) => {

  const generateMessages =
    props.messages.map((message) => {
      return (<GenerateMessage key={message.id} message={message.content} username={message.username}/>);
    })

  const generateNotifications =
    props.notifications.map((notification) => {
      return (<GenerateNotification key={notification.id} content={notification.content} />)
    })

  return (
    <main className="messages">
      {generateMessages}
      {generateNotifications}
    </main>
  )
}

export default GenerateMessageList;