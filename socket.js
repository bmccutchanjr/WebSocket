const websocket = require("ws");

//  02  let webs = undefined;
//  02  let socket = undefined;
const clients = [];

socket =
{
    createServer: server =>
    {
        const socket = new websocket.Server ( { server } );
        socket.on ("connection", client =>
        {
console.log ("on connection");
//  02  webs = client;
clients.push (client);

            client.on ("message", function (message)
            {
                console.log ("message: " + message);
//  02                  client.send ("received " + message);
//  02                  client.send ("sending " + message);
clients.forEach (c =>
{
    c.send (clients.length + " current connections");    
    c.send (message);    
})
            });
        });

        socket.on ("listening", () =>
        {
            console.log ("WebSocket server is up and running");
        });
    },

    send: message =>
    {
//  02          if (webs != undefined)
//  02              webs.send (message)
clients.forEach (c =>
{
    c.send (message);    
})
    }
}

module.exports = socket;
