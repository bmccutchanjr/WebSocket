//  This is a simple NodeJS server with ExpressJS and the npm module ws to implement websocket.  It is intended to be very simple,
//  nothing more than I need to learn how to set up a server to work with websockets

const chalk = require("chalk");
const express = require("express");
const websocket = require("ws");

const app = express();
app.use (express.urlencoded ( { extended: true } ) );
app.use (express.json());
app.use ("/", require("../routes/routes.js"));

const server = app.listen (8080, () =>
{
    console.log ("HTTP server is up and running");
});

const socket = websocket.Server ( { server } );
socket.on ("connection", parm =>
{

});