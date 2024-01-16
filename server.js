import WebSocket, { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(client) {
  client.on('message', function message(data) {
    let player = JSON.parse(data)
    const clientArray = Array.from(wss.clients)
    client.player = player
    const players = []
    clientArray.forEach(function(ws) {
      players.push(ws.player)
    })

    wss.clients.forEach(function each(ws) {
      if (client.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(players));
      }
    });
  });
});
