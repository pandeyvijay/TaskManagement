const express = require("express");
const { saveMember, getMembers } = require("../controller/memberController");

const route = express.Router();

route.route("").post(saveMember).get(getMembers);

module.exports = route;
