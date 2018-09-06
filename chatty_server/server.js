const WebSocket = require("ws");
const express = require("express");
const SocketServer = require("ws").Server;
const uuidv4 = require("uuid/v4");

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()

  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static("public"))
  .listen(PORT, "0.0.0.0", "localhost", () =>
    console.log(`Listening on ${PORT}`)
  );

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on("connection", ws => {

  // sets username property for recording who logs out
  ws.username = "Anon";
  const newUserConnectedObj = {
    type: "incomingNotification",
    id: uuidv4(),
    content: "Anon has joined this chat room!",
    totalUsers: wss.clients.size
  };

  // broadcasts to each user when somebody joins the chat room, updates users counter
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(newUserConnectedObj));
    }
  });

  // handles messages newly submitted messages and changes in username
  ws.on("message", function incoming(data) {
    const newMessageObject = JSON.parse(data);
    if (newMessageObject.type === "postMessage") {
      newMessageObject.id = uuidv4();
      newMessageObject.type = "incomingMessage";

      // check if the content is a giphy request

      // check if the content is an image link
      const imageArray = newMessageObject.content.match(/(.+)\.(jpe?g|png|gif)/)
      if (imageArray) {
        imageText = imageArray[0];
        newMessageObject.content = `
        <div>
          <img src="${imageText}" alt="Sorry, we can't seem to find your picture. Seriously, is this even a picture link?" style="max-width:60%;"/>
        </div>
        `
      }
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(newMessageObject));
        }
      });


    } else if (newMessageObject.type === "postNotification") {
      ws.username = newMessageObject.newUsername;
      newMessageObject.id = uuidv4();
      newMessageObject.type = "incomingNotification";

      // totalUsers is updated as changes in username and users exiting the chat room are all processed on the
      // react side under the type "incomingNotification"
      // this is used to maintain the users counter
      newMessageObject.totalUsers = wss.clients.size;
      newMessageObject.content = `${
        newMessageObject.oldUsername
      } has changed their name to ${newMessageObject.newUsername}`;
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(newMessageObject));
        }
      });
    }
  });

  // broadcasts notifications that a user has exited the chat room, updates user counter
  ws.on("close", () => {
    const userHasDisconnectedObj = {
      type: "incomingNotification",
      id: uuidv4(),
      content: `${ws.username} has left this chat room :(`,
      totalUsers: wss.clients.size
    };
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(userHasDisconnectedObj));
      }
    });
  });
});
