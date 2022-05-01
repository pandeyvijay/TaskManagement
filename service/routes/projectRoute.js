const express = require("express");
const projectController = require("../controller/projectController");

const route = express.Router();

route
  .route("")
  .post(projectController.createNewProject)
  .get(projectController.getAllProject);

route
  .route("/:id")
  .get(projectController.getProject)
  .put(projectController.updateProject)
  .delete(projectController.deleteProject);

module.exports = route;
