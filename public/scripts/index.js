if (!WebSocket) alert ("WebSocket is not supported")

const ws = new WebSocket ("ws://192.168.43.9:8080");

ws.onopen = function (event)
{
    ws.send ("Hello!");
    alert ("connected");
};

ws.onmessage = function (event)
{
    const section = document.getElementById("messages")
    const div = document.createElement("div");
    div.innerText = event.data;
    section.append (div);
};

function sendSocket (event)
{   event.preventDefault();

    alert (event.target.value);
    ws.send (event.target.value);
}