import React, {Component} from 'react';
import GenerateChatBar from './Chatbar.jsx';
import GenerateMessageList from './MessageList.jsx';
import GenerateNavBar from './NavBar.jsx'



class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUser: {name: "Anon"},
      messages: [],
      notifications: [],
      totalUsers: 0
    };
  };

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = new WebSocket("ws://localhost:3001")
    this.socket.onopen = (event) => {
      console.log("you've opened the client side socket");
    }
    this.socket.onmessage = (event) => {
      const newServerMessageObj = JSON.parse(event.data);
      if (newServerMessageObj.type === "incomingMessage") {
        const oldMessages = this.state.messages;
        const newMessages = [... oldMessages, newServerMessageObj];
        this.setState({messages: newMessages});
      } else if (newServerMessageObj.type === "incomingNotification") {
        const oldNotifications = this.state.notifications;
        const newNotifications = [... oldNotifications, newServerMessageObj]
        this.setState({notifications: newNotifications, totalUsers: newServerMessageObj.totalUsers});
      }
    }
  }

  _handleUserChange = (event) => {
    if (event.key === "Enter" && event.target.value !== "" && event.target.value !== this.state.currentUser.name) {
      const oldUsername = this.state.currentUser.name;
      const usernameNotifObject = {type: "postNotification", oldUsername: oldUsername, newUsername: event.target.value};
      this.socket.send(JSON.stringify(usernameNotifObject));
      const userInfo = {name: event.target.value};
      this.setState({currentUser: userInfo});
    }
  }

  _handleTextInputChange = (event) =>  {
    if (event.key === "Enter" && event.target.value !== "") {
      const newMessageObj = {type: "postMessage", username: this.state.currentUser.name, content: event.target.value};
      this.socket.send(JSON.stringify(newMessageObj));
      event.target.value = ""
    }
  }


  render() {
    return (
      <div>
        <GenerateNavBar totalUsers={this.state.totalUsers}/>
        <GenerateMessageList messages={this.state.messages} notifications={this.state.notifications}/>
        <GenerateChatBar currentUser={this.state.currentUser.name} handleUserChange={this._handleUserChange} handleTextInputChange={this._handleTextInputChange}/>
      </div>
    );
  }
}




export default App;

