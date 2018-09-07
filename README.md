Chatty-App
=================================================================

### Summary

A clean and simple Slack clone that allows multiple users to chat together in the same space. If users enter a link for an image or gif, the web app renders the content in the chat window. Functional restrictions were put in place if the logged username does not match the username in the input box, or if the input boxes do not contain text. Users also receive notifications when a username is changed, and when someone leaves or joins the chat room. Total number of participants is also recorded in a counter on the right side of the header.

The process was great practice for practicing the use of props and states between parent and child components, as well as visualizing proper use of components to encompass different parts of the HTML. Image link string search also allowed for regex practice.


Chatty_server subdirectory:
Simple Websocket server for the Chatty App. Processes new posts, changes in username, and outgoing notifications. Notifications include changes in username and whether a new socket joins or leaves the chat room.


### Showcases:

| React | JSX | WebSockets | Express | Regexp |

### Screenshots
![Users leaving and joining are recorded as notifications, so are name changes](https://github.com/dru1208/chatty-app/blob/master/docs/1.png?raw=true)
* Users leaving and joining are recorded as notifications, so are name changes
![User sends message, broadcasted to everyone](https://github.com/dru1208/chatty-app/blob/master/docs/2.png?raw=true)
* User sends message, broadcasted to everyone
![User links image, image is rendered on everyone's browser](https://github.com/dru1208/chatty-app/blob/master/docs/3.png?raw=true)
* User links image, image is rendered on everyone's browser
![User links gif, gif is rendered on everyone's browser](https://github.com/dru1208/chatty-app/blob/master/docs/4.png?raw=true)
* User links gif, gif is rendered on everyone's browser




### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)