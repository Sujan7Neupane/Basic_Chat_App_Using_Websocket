import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

// for the commonjs usuage - dont need react just venilla html js works
app.use(express.static(path.resolve("./public")));

// Socket initialize
const io = new Server(server);

// handle socket
// socket = individual users/client
io.on("connection", (socket) => {
  console.log("New user connected!", socket.id);

  //   2.
  // client sends here
  // socket.emit("message", message); from here
  socket.on("message", (message) => {
    // console.log("New msg from client", message);
    // now send this msg from server to other clients
    io.emit("message", message);
  });
});

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

server.listen(3000, () => console.log(`Server started port 3000`));
