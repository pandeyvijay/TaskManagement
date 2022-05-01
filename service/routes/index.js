const teamRoute = require("./teamroute");
const memberRoute = require("./member");
const taskRoute = require("./taskRoute");
const projectROute = require("./projectRoute");

const configureRoutes = [
  { path: "/team", route: teamRoute },
  { path: "/member", route: memberRoute },
  { path: "/task", route: taskRoute },
  { path: "/project", route: projectROute },
];
module.exports = configureRoutes;
