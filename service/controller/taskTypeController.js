const {
  createNewTaskType,
  getAllTask,
  updateTask,
  deleteTask,
} = require("../middletier/taskTypeService");

const updateTaskType = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await updateTask(id, req.body);
    return res.status(200).send(task);
  } catch (ex) {
    res.status(400).send(ex);
  }
};

const deleteTaskType = async (req, res) => {
  try {
    console.log(req.param);
    const { id } = req.params;
    const task = deleteTask(id);
    return res.status(200).send(task);
  } catch (ex) {
    res.status(400).send(ex);
  }
};

createTaskType = async (req, res) => {
  try {
    const tasktype = await createNewTaskType(req.body);
    return res.status(200).send(tasktype);
  } catch (ex) {
    return res.status(400).send(ex);
  }
};

const GetAllTaskType = async (req, res) => {
  try {
    const tasktype = await getAllTask();
    return res.status(200).send(tasktype);
  } catch (ex) {
    return res.status(400).send(ex);
  }
};

module.exports = {
  createTaskType,
  GetAllTaskType,
  updateTaskType,
  deleteTaskType,
};
