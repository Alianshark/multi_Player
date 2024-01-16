let socket = new WebSocket("ws://localhost:8080");

socket.onopen = function(e) {
    alert("[open] З’єднання встановлено");
    alert("Відправка на сервер");
    socket.send("Мене звати Джон");
  };
  
  socket.onmessage = function(event) {
    alert(`[message] Дані отримані із сервера: ${event.data}`);
  };
  
  socket.onclose = function(event) {
    if (event.wasClean) {
      alert(`[close] З’єднання закрите чисто, код=${event.code} причина=${event.reason}`);
    } else {
      // наприклад сервер завершив процес або мережа не працює
      // у цьому випадку event.code зазвичай дорівнює 1006
      alert('[close] З’єднання перервано');
    }
  };
  
  socket.onerror = function(error) {
    alert(`[error]`);
  };