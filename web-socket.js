const io = require("socket.io");

let socket;

const handlePreflightRequest = (req, res) => {
  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": true,
  });

  return res.end();
};

const startWebSocket = (httpServer) => {
  try {
    socket = io(httpServer, {
      cors: {
        origins: ["*"],
        handlePreflightRequest,
      },
    });

    console.log("Web Socket Started.");
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
