let socket = new WebSocket("ws://localhost:8080");


socket.onopen = function(e) {
  socket.send(JSON.stringify(player));
  };
  
  socket.onmessage = function(client) {
     let anotherPlayer = JSON.parse(client.data)
      console.log('text', JSON.parse(client.data))
  };

  socket.onerror = function(error) {
    alert(`[error]`);
  };
  
let img = document.createElement('img')
img.src = '/vintage-robot-toy-white-background_1308-77501.avif'
img.style.position = 'absolute'
img.style.left = 200 + 'px'
document.body.append(img)

let player = {
    x: 50,
    y: 50,
}
 


function position() {
    img.style.left = player.x + 'px'
    img.style.top = player.y + 'px'
}

function keyboardMoving() {
 addEventListener('keydown', leftMove)
 addEventListener('keydown', rightMove)
 addEventListener('keydown', upMove)
 addEventListener('keydown', downMove)

}
keyboardMoving()

function leftMove(event) {
    
    if (event.key == 'ArrowLeft') {
        player.x -= 10
        socket.send(JSON.stringify(player));
    }
}
function rightMove(event) {
    if (event.key == 'ArrowRight') {
        player.x += 10
        socket.send(JSON.stringify(player));
    }
}
function upMove(event) {
    
    if (event.key == 'ArrowUp') {
        player.y -= 10
        socket.send(JSON.stringify(player));
    }
}
function downMove(event) {
    if (event.key == 'ArrowDown') {
        player.y += 10
        socket.send(JSON.stringify(player));
    }
}
setInterval( imgStep,10 )     

function imgStep () {
    position()
}