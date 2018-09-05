import React, {Component} from 'react';

// child functional component for generating chatbar

class GenerateChatBar extends Component {
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser} onKeyPress={this.props.handleUserChange}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.props.handleTextInputChange}/>
      </footer>
    );
  }
}



export default GenerateChatBar;