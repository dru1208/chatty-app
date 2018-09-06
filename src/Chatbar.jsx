import React, {Component} from 'react';

// child functional component for generating chatbar

class GenerateChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUsername: this.props.currentUser
    }
  }


  updateInputUsernameAndHandleUserChange = (event) => {
    this.setState({inputUsername: event.target.value})
    if (
      event.key === "Enter" &&
      event.target.value !== "" &&
      event.target.value !== this.props.currentUser
    ) {
      this.props.handleUserChange(event);
    }
  }


  checkUsernamesAndHandleTextInput = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      // checks if the username in the input field matches the current user in the state
      if (this.props.currentUser !== this.state.inputUsername) {
        alert("Update Your Username!");
      } else {
        this.props.handleTextInputChange(event);
      }
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" name="inputUsername" placeholder="Your Name (Optional)" defaultValue={this.state.inputUsername} onKeyPress={this.updateInputUsernameAndHandleUserChange}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.checkUsernamesAndHandleTextInput}/>
      </footer>
    );
  }
}



export default GenerateChatBar;