const express = require("express");
const { config } = require("dotenv");
const httpRoutes = require("./routes/http");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");
const { startWebSocket, getSocket } = require("./web-socket");

const app = express();

config();

app.use(httpRoutes);
app.use(errorHandlingMiddleware);

const httpServer = app.listen(process.env.PORT, (err) => {
  if (err) return console.log("Error occurred while starting the server.");
  return console.log(
    `${process.env.APP_NAME} started at port => ${process.env.PORT}.`
  );
});

startWebSocket(httpServer);
