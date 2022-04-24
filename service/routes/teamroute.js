const express = require("express");
const { saveTeam } = require("../controller/teamController");

const route = express.Router();

route.get("", (req, res) => {
  res.status(200).send("team route");
});

route.post("", saveTeam);

module.exports = route;
