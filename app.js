const express = require("express");
const { config } = require("dotenv");
const httpRoutes = require("./routes/http");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");
const { startWebSocket, getSocket } = require("./web-socket");
const cors = require("./middleware/cors");

const app = express();

config();

app.use(cors);
app.use(httpRoutes);
app.use(errorHandlingMiddleware);

const httpServer = app.listen(process.env.PORT || 4000, (err) => {
  if (err) return console.log("Error occurred while starting the server.");
  return console.log(
    `${process.env.APP_NAME} started at port => ${process.env.PORT}.`
  );
});

startWebSocket(httpServer);

const socket = getSocket();

//* Event public to all clients.
socket.on("connection", (client_socket) => {
  console.log("New Connection added");
  client_socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  //* Event private to a particular client.
  client_socket.on("join-test-room", () => {
    //? Client joins a room/group.
    client_socket.join("test");
  });
});
