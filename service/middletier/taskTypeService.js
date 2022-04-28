const TaskTypeModel = require("../model/taskTypeModel");

const createNewTaskType = async (taskType) => {
  const newTask = await TaskTypeModel.create(taskType);
  return newTask;
};

const getAllTask = async () => {
  const tasks = await TaskTypeModel.find({});
  return tasks;
};

const updateTask = async (id, uTask) => {
  const filter = { _id: id };
  return await TaskTypeModel.findOneAndUpdate(filter, {
    name: uTask.name,
    color: uTask.color,
  });
};

const deleteTask = async (id) => {
  const filter = { _id: id };
  return await TaskTypeModel.deleteOne(filter);
};


module.exports = {
  createNewTaskType,
  getAllTask,
  updateTask,
  deleteTask,
};
