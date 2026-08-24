const socket = io();

const sendBtn = document.getElementById("sendMsg");
const msgInput = document.getElementById("message");

// To display msg in dom
const allMessageDiv = document.getElementById("allMessages");

// 3.
// message back from server
socket.on("message", (message) => {
  console.log(message);
  const p = document.createElement("p");
  p.innerText = message;
  allMessageDiv.appendChild(p);
});

sendBtn.addEventListener("click", (e) => {
  const message = msgInput.value;
  //   console.log(message);

  //   1.
  //   sending input msg to server side
  //   emit=send
  //   'message' particular msg ko naam/event
  //   message - input value
  socket.emit("message", message);
});
