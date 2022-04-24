const express = require("express");
const { saveTeam, getTeams } = require("../controller/teamController");

const route = express.Router();

route.route("").post(saveTeam).get(getTeams);

module.exports = route;
