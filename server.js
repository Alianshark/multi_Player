import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
//setInterval(connectionTimer,1000)
function connectionTimer() {
    wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(`Timer: ${new Date()}`);
    }
  });
    
}
wss.on('connection', function connection(ws) {
  console.log('client connected');
  //console.log(wss.clients, 'wss clients');
  
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something new');

});