let socket = new WebSocket("ws://localhost:8080");


socket.onopen = function(e) {
    //document.body.innerHTML += "[open] З’єднання встановлено"
    // alert("Відправка на сервер");
   // document.body.innerHTML += "Відправка на сервер"
   
    socket.send(JSON.stringify(player));
   
  };
  
  socket.onmessage = function(client) {
     let anotherPlayer = JSON.parse(client.data)
      console.log('text', JSON.parse(client.data))
    //document.body.innerHTML += `<div>${event.data}</div>`
    //alert(`[message] Дані отримані із сервера: ${event.data}`);
  };
  
  /*socket.onclose = function(event) {
    if (event.wasClean) {
     // alert(`[close] З’єднання закрите чисто, код=${event.code} причина=${event.reason}`);
    } else {
      // наприклад сервер завершив процес або мережа не працює
      // у цьому випадку event.code зазвичай дорівнює 1006
      alert('[close] З’єднання перервано');
    }
  }; */
  
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
        console.log('ArrowLeft Pressed')
        player.x -= 10
        socket.send(JSON.stringify(player));
    }
}
function rightMove(event) {
    if (event.key == 'ArrowRight') {
        console.log('ArrowRight Pressed')
        player.x += 10
        socket.send(JSON.stringify(player));
    }
}
function upMove(event) {
    
    if (event.key == 'ArrowUp') {
        console.log('ArrowUp Pressed')
        player.y -= 10
        socket.send(JSON.stringify(player));
    }
}
function downMove(event) {
    if (event.key == 'ArrowDown') {
        console.log('Arrowdown Pressed')
        player.y += 10
        socket.send(JSON.stringify(player));
    }
}
setInterval( imgStep,10 )     

function imgStep () {
    console.log('what?')
    position()
}