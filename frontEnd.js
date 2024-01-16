let socket = new WebSocket("ws://localhost:8080");


socket.onopen = function(e) {
    //document.body.innerHTML += "[open] З’єднання встановлено"
    // alert("Відправка на сервер");
   // document.body.innerHTML += "Відправка на сервер"
    socket.send("Мене звати Джон");
  };
  
  socket.onmessage = function(event) {
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
let x = 50 
let y = 50
img.src = '/vintage-robot-toy-white-background_1308-77501.avif'
img.style.position = 'absolute'
img.style.left = 200 + 'px'
document.body.append(img)


function position() {
    img.style.left = x + 'px'
    img.style.top = y + 'px'
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
        x -= 10
    }
}
function rightMove(event) {
    if (event.key == 'ArrowRight') {
        console.log('ArrowRight Pressed')
        x += 10
    }
}
function upMove(event) {
    
    if (event.key == 'ArrowUp') {
        console.log('ArrowUp Pressed')
        y -= 10
    }
}
function downMove(event) {
    if (event.key == 'ArrowDown') {
        console.log('Arrowdown Pressed')
        y += 10
    }
}
setInterval(imgStep,10)     

function imgStep () {
    console.log('what?')
    position()
    
}