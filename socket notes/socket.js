// !every user that connects to the server will have a unique socket object and, therefore, unique event handlers.

// cont io=require("socket.io")(http)

// io.on("connection",(socket)=>{
// console.log("conection")
// socket.on("disconnect",()=>{
// console.log("disconnect user")

// })
// })

// !frontend (Client-side) Socket Events:

// ?"connect":
// Triggered when the client successfully establishes a connection with the server.
//? "disconnect":
//  Triggered when the client disconnects from the server.
// ?"message":
//  Used to send and receive custom messages between the client and server.
// ?"error":
// Triggered when an error occurs in the socket connection.
// ?"connect_error":
//  Triggered when there is an error while establishing a connection with the server.
// ?"connect_timeout":
// Triggered when the connection times out.
// ?"reconnect":
// Triggered when the client successfully reconnects to the server after a disconnection.
// ?"reconnecting":
//  Triggered when the client is attempting to reconnect to the server.
// ?"reconnect_error":
//  Triggered when an error occurs during reconnection attempts.
// ?"reconnect_failed":
//  Triggered when the client's reconnection attempts have failed.
//! Backend (Server-side) Socket Events:

// ?"connection":
// Triggered when a new client establishes a connection with the server.
// ?"disconnect":
// Triggered when a client disconnects from the server.
// ?"message":
//  Used to send and receive custom messages between the client and server.
// ?"error":
//  Triggered when an error occurs in the socket connection.
// ?"connect_error":
//  Triggered when there is an error while establishing a connection with the client.
// ?"connect_timeout":
//  Triggered when the connection times out.
// ?"reconnect":
// Triggered when the client successfully reconnects to the server after a disconnection.
// ?"reconnecting":
// Triggered when the client is attempting to reconnect to the server.
// ?"reconnect_error":
//  Triggered when an error occurs during reconnection attempts.
// ?"reconnect_failed":
// Triggered when the client's reconnection attempts have failed.

//! code demo
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("connection");

  socket.on("disconnect", () => {
    console.log("disconnect user");
  });
});

socket.on("connect", () => {
  console.log("Connected to the server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from the server");
});

socket.on("message", (data) => {
  console.log("Received message:", data);
});

socket.on("error", (error) => {
  console.log("Socket error:", error);
});

socket.on("connect_error", (error) => {
  console.log("Connection error:", error);
});

socket.on("connect_timeout", () => {
  console.log("Connection timeout");
});

socket.on("reconnect", () => {
  console.log("Reconnected to the server");
});

socket.on("reconnecting", () => {
  console.log("Attempting to reconnect");
});

socket.on("reconnect_error", (error) => {
  console.log("Reconnection error:", error);
});

socket.on("reconnect_failed", () => {
  console.log("Reconnection failed");
});

//! how we know that i am going to create new server how it work corectly or not to check this to used this website
//* socket server.io

//! what is polling
// Polling refers to a technique used in computer science and web development to retrieve data or updates from a server at regular intervals. It involves the client (such as a web browser) continuously sending requests to the server to check for new information.
// *Polling can be resource-intensive because it requires continuous requests from the client and server responses, even if there is no new data

// ! how to get all connected user in socket.io
// io.sockets.clients.connected

// ! what is .on and emit in backend
// In Socket.IO, .emit and .on are methods used for emitting and listening to events, respectively. They allow real-time communication between the server and the client.

// On the server-side (Node.js), you can use .emit to send an event to the connected clients.
// Server-side code
//! const io = require('socket.io')(server);

//! io.on('connection', (socket) => {
// Emitting an event to the client
//!   socket.emit('message', 'Hello from the server!');

// Listening for events from the client
//!   socket.on('chatMessage', (message) => {
// !    console.log('Received message from client:', message);
// !  });
// !});

// !what is .on and .emit and front endside
// On the client-side (browser or client application), you can use .emit to send an event to the server and .on to listen for events from the server. Here's an example using a browser client:

// Client-side code
const socket = io();

// Listening for events from the server
socket.on("message", (message) => {
  console.log("Received message from server:", message);
});

// Emitting an event to the server
socket.emit("chatMessage", "Hello from the client!");
// ! what is io
// 'io' is now a function provided by the 'socket.io-client' library

// Use the 'io' function to create a socket connection to the server
//  const socket = io("http://localhost:backendport");
// ! what is socket.off("event",listenerFun)
// socket.off is a method in the socket.io-client library that is used to remove event listeners from the socket. When you register event listeners using the socket.on method, socket.off allows you to remove those listeners when they are no longer needed or when the component is unmounted, avoiding potential memory leaks.

// The socket.off method has the following syntax:
// socket.off(eventName, listenerFunction);

//!what is socket.to
// socket.to(roomName):
// The socket.to method is used to create a new Socket object that represents the clients within the specified room.

// !what is socket.join()
// socket.join(roomName, [callback]):

// Joins the socket to a specific room.
// Parameters:
// roomName: The name of the room to join.
// callback (optional): A callback function to be called once the socket has joined the room.

// ! what is socket.leave
// socket.leave(roomName, [callback]):

// Leaves a specific room.
// Parameters:
// roomName: The name of the room to leave.
// callback (optional): A callback function to be called once the socket has left the room.

//
// socket.rooms:

// An object representing the rooms to which the socket is currently connected (including its own socket ID).
// Example:

// Join the socket to a room
socket.join("room1");

// Create a new Socket object that represents the clients in 'room1'
const roomSocket = socket.to("room1");

// Emit an event to clients in 'room1'
roomSocket.emit("message", "Hello, room1!");

socket.leave("room1", () => {
  console.log("Socket left room1");
});
socket.join("room1", () => {
  console.log("Socket joined room1");
});
//! send message
// socket.to(room).emit()
// socket.join(room)
// using to() we can set data we can send from all romm using emit method
