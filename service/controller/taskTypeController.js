const {
  createNewTaskType,
  getAllTask,
  updateTask,
  deleteTask,
} = require("../middletier/taskTypeService");
const ErrorWrapper = require("../middleware/errorMiddleware");

const updateTaskType = ErrorWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await updateTask(id, req.body);
  return res.status(200).send(task);
});

const deleteTaskType = ErrorWrapper(async (req, res) => {
  console.log(req.param);
  const { id } = req.params;
  const task = deleteTask(id);
  return res.status(200).send(task);
});

const createTaskType = ErrorWrapper(async (req, res) => {
  const tasktype = await createNewTaskType(req.body);
  return res.status(200).send(tasktype);
});

const GetAllTaskType = ErrorWrapper(async (req, res) => {
  const tasktype = await getAllTask();
  return res.status(200).send(tasktype);
});

module.exports = {
  createTaskType,
  GetAllTaskType,
  updateTaskType,
  deleteTaskType,
};
