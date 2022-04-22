const express = require("express");
const { saveMember } = require("../controller/memberController");

const route = express.Router();

route.route("").post(saveMember);

module.exports = route;
