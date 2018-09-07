Chatty-App
=================================================================

### Summary

A clean and simple Slack clone that allows multiple users to chat together in the same space. If users enter a link for an image, the web app renders the image in the chat window. Functional restrictions were put in place if the logged username does not match the username in the input box, or if the input boxes do not contain text. Users also receive notifications when a username is changed, and when someone leaves or joins the chat room. Total number of participants is also recorded in a counter on the right side of the header.

The process was great practice for practicing the use of props and states between parent and child components, as well as visualizing proper use of components to encompass different parts of the HTML. Image link string search also allowed for regex practice.

Chatty_server subdirectory:
Simple Websocket server for the Chatty App. Processes new posts, changes in username, and outgoing notifications


### Showcases:


| React | JSX | WebSockets | Express | Regexp |

### Screenshots
![User have joined and usernames have been changed, counter has been updated. Notifications show who is leaving the room.](https://github.com/dru1208/chatty-app/blob/master/docs/1.png?raw=true)
![Robert can see messsages from his friends and the ones that he has sent](https://github.com/dru1208/chatty-app/blob/master/docs/2.png?raw=true)
![After Robert sends a message, Jerry's window displays the message as well](https://github.com/dru1208/chatty-app/blob/master/docs/3.png?raw=true)

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)