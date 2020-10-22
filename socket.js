const websocket = require("ws");

let webs = undefined;

socket =
{
    createServer: server =>
    {
        const socket = new websocket.Server ( { server } );
        socket.on ("connection", ws =>
        {
console.log ("on connection");
webs = ws;
            ws.on ("listening", () =>
            {
                console.log ("WebSocket server is up and running");
            });

            ws.on ("message", function (message)
            {
                console.log ("message: " + message);
                ws.send ("received " + message);
                ws.send ("sending " + message);
            });
        });
    },

    send: message =>
    {
        webs.send (message)
    }
}

module.exports = socket;
