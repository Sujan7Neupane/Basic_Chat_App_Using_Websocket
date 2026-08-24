# WebSocket Basics

I made a very simple chat app using:

* HTML
* JavaScript
* Node.js
* Socket.IO

Two browsers can send messages to each other.

## How it works

```text
Browser
   ↓
Server
   ↓
Browser
```

### 1. Client sends a message

```js
socket.emit("message", message);
```

`emit()` = **send**

The browser sends the message to the server.

---

### 2. Server receives it

```js
socket.on("message", (message) => {
    console.log(message);
});
```

`on()` = **listen**

The server listens for the `"message"` event.

---

### 3. Server sends it back

```js
io.emit("message", message);
```

This sends the message to the connected browsers.

---

### 4. Client receives it

```js
socket.on("message", (message) => {
    // show message on the page
});
```

Then we put the message inside a `<div>` so it appears on the screen.

---

## The main thing to remember

```text
emit = send
on   = listen
```

The basic flow is:

```text
Client
  ↓ emit
Server
  ↓ emit
Client
  ↓
Show message in HTML
```

That's it for now.

The goal of this small project is just to understand how a message can travel:

**Client → Server → Client**
