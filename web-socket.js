const io = require("socket.io");

let socket;

const startWebSocket = (httpServer) => {
  try {
    socket = io(httpServer);

    console.log("Web Socket Started.");

    socket.on("connection", (client_connection) => {
      console.log("New Connection added");
    });
  } catch (error) {
    console.log("Unable to connect the web socket.");
  }
};

const getSocket = () => {
  return socket;
};

module.exports = {
  startWebSocket,
  getSocket,
};
