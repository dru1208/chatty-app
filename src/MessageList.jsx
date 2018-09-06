import React, {Component} from 'react';
import GenerateMessage from './Message.jsx'
import GenerateNotification from './Notification.jsx'

// child functional component for dynamically generating message list with username/message and notifications

const GenerateMessageList = (props) => {
  const generateMessages =
    props.messages.map((message) => {
      if (message.type === "incomingMessage") {
        return <GenerateMessage key={message.id} message={message.content} username={message.username}/>;
      } else if (message.type === "incomingNotification") {
        return (<GenerateNotification key={message.id} content={message.content} />)
      }
    })

  return (
    <main className="messages">
      {generateMessages}
    </main>
  );
}

export default GenerateMessageList;