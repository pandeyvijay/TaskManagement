const express = require("express");
const teamRoute = require("./teamroute");
const memberRoute = require("./member");

const configureRoutes = [
  { path: "/team", route: teamRoute },
  { path: "/member", route: memberRoute },
];
module.exports = configureRoutes;
