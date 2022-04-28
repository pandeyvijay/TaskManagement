const express = require("express");
const {
  createTaskType,
  GetAllTaskType,
  updateTaskType,
  deleteTaskType,
} = require("../controller/taskTypeController");

const route = express.Router();

route.route("/type").post(createTaskType).get(GetAllTaskType);

route.route("/type/:id").put(updateTaskType).delete(deleteTaskType);

module.exports = route;
