const { getSocket } = require("../../web-socket");

const configurationController = (req, res) => {
  return res.json({
    theme: {
      primary_color: process.env.P_COLOR,
      secondary_color: process.env.S_COLOR,
    },
  });
};

const pingMessageController = (req, res) => {
  const { message } = req.body;

  const socket = getSocket();

  socket.emit("ping-message", { message });

  return res.json({
    message,
  });
};

module.exports = { configurationController, pingMessageController };
