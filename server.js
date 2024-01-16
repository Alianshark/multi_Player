import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
setInterval(connectionTimer,1000)
function connectionTimer() {
    wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(client.player));
    }
  });

}
wss.on('connection', function connection(client) {
    console.log('client connected');
    
    client.on('error', console.error);
    client.on('message', function message(data) {
        let player = JSON.parse(data)
        client.player = player
  });
});