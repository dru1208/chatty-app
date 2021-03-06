import React, { Component } from "react";
import GenerateChatBar from "./Chatbar.jsx";
import GenerateMessageList from "./MessageList.jsx";
import GenerateNavBar from "./NavBar.jsx";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: "Anon" },
      messages: [],
      notifications: [],
      totalUsers: 0
    };
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = new WebSocket("ws://localhost:3001");

    // confirmation that socket is open from client-side
    this.socket.onopen = () => {
      console.log("you've opened the client side socket");
    };

    // handles messages from server for
    // 1. displaying a new message that has been sent
    // 2. displaying notifications of username changes and people leaving/joining the room
    this.socket.onmessage = event => {
      const newServerMessageObj = JSON.parse(event.data);
      if (newServerMessageObj.type === "incomingMessage") {
        const oldMessages = this.state.messages;
        const newMessages = [...oldMessages, newServerMessageObj];
        this.setState({ messages: newMessages });
      } else if (newServerMessageObj.type === "incomingNotification") {
        const oldMessages = this.state.messages;
        const newMessages = [...oldMessages, newServerMessageObj];
        this.setState({
          messages: newMessages,
          totalUsers: newServerMessageObj.totalUsers
        });
      }
    };
  }

  // function for sending data and changing state when user enters a new value for username
  _handleUserChange = event => {
    const oldUsername = this.state.currentUser.name;
    const usernameNotifObject = {
      type: "postNotification",
      oldUsername: oldUsername,
      newUsername: event.target.value
    };
    this.socket.send(JSON.stringify(usernameNotifObject));
    const userInfo = { name: event.target.value };
    this.setState({ currentUser: userInfo });
  };



  // function for sending data and changing state when user sends a new message
  _handleTextInputChange = event => {
      const newMessageObj = {
        type: "postMessage",
        username: this.state.currentUser.name,
        content: event.target.value
      };
      this.socket.send(JSON.stringify(newMessageObj));
      event.target.value = "";
  };



  render() {
    return (
      <div>
        <GenerateNavBar totalUsers={this.state.totalUsers} />
        <GenerateMessageList
          messages={this.state.messages}
        />
        <GenerateChatBar
          currentUser={this.state.currentUser.name}
          handleUserChange={this._handleUserChange}
          handleTextInputChange={this._handleTextInputChange}
        />
      </div>
    );
  }
}


export default App;
