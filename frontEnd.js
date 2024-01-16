let socket = new WebSocket("ws://localhost:8080");
let players = []

socket.onopen = function(e) {
    socket.send(JSON.stringify(player));
};

socket.onmessage = function(client) {
    document.body.innerHTML = ""
    let updatedPlayers = JSON.parse(client.data)
    updatedPlayers.forEach((newPlayer) => {
        let img = document.createElement('img')
        img.src = '/vintage-robot-toy-white-background_1308-77501.avif'
        img.style.position = 'absolute'
        img.style.left = newPlayer.x + 'px'
        img.style.top = newPlayer.y + 'px'
        document.body.append(img)
    });
}

let player = {
    x: 50,
    y: 50,
}

function playerMovement(event) {
    if (event.key == 'ArrowLeft') {
        player.x -= 10
        socket.send(JSON.stringify(player));
    }
    if (event.key == 'ArrowRight') {
        player.x += 10
        socket.send(JSON.stringify(player));
    }
    if (event.key == 'ArrowUp') {
        player.y -= 10
        socket.send(JSON.stringify(player));
    }
    if (event.key == 'ArrowDown') {
        player.y += 10
        socket.send(JSON.stringify(player));
    }
}

addEventListener('keydown', playerMovement)
