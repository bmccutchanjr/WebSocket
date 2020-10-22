//  This is a simple NodeJS server with ExpressJS and the npm module ws to implement a websocket server.  It is intended to be very
//  simple, nothing more than I need to learn how to set up an ExpressJS server that works with websockets and to learn the basics
//  of working with websockets.

const chalk = require("chalk");
const express = require("express");
//  01  const websocket = require("ws");
//  01  begins
const socket = require("./socket.js");
//  01  begins

const app = express();
app.use (express.urlencoded ( { extended: true } ) );
app.use (express.json());
app.use ("/", require("./routes/routes.js"));

const server = app.listen (8080, () =>
{
    console.log ("HTTP server is up and running");
});

//  01  const socket = new websocket.Server ( { server } );
//  01  socket.on ("connection", ws =>
//  01  {
//  01  console.log ("on connection");
//  01      ws.on ("listening", () =>
//  01      {
//  01          console.log ("WebSocket server is up and running");
//  01      });
//  01  
//  01      ws.on ("message", function (message)
//  01      {
//  01          console.log ("message: " + message);
//  01          ws.send ("received " + message);
//  01          ws.send ("sending " + message);
//  01      });
//  01  });
socket.createServer (server);

setTimeout (() =>
{
    socket.send ("WOOHOO");
}, 10000);
