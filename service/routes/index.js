const express = require("express");
const teamRoute = require("./teamroute");
const memberRoute = require("./member");
const taskRoute = require("./taskRoute");

const configureRoutes = [
  { path: "/team", route: teamRoute },
  { path: "/member", route: memberRoute },
  { path: "/task", route: taskRoute },
];
module.exports = configureRoutes;
