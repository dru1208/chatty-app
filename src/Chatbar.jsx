import React, {Component} from 'react';

// child functional component for generating chatbar

const GenerateChatBar = (props) => {
  return (
    <footer className="chatbar">
      <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={props.currentUser} onKeyPress={props.handleUserChange}/>
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={props.handleTextInputChange}/>
    </footer>
  );
}


export default GenerateChatBar;