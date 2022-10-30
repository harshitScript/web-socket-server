const express = require("express");
const { json } = require("body-parser");
const {
  configurationController,
  pingMessageController,
} = require("../../controllers/http");

const httpRoutes = express.Router();

httpRoutes.get("/configuration", configurationController);

httpRoutes.post("/ping-message", json(), pingMessageController);

module.exports = httpRoutes;
