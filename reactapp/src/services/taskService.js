import axios from "axios";

const updateTask = async (task) => {
  try {
    const resp = await axios.put(
      "http://localhost:3333/task/type/" + task._id,
      task
    );
    return resp.status == 200;
  } catch (ex) {
    return false;
  }
};

const createNewTask = async (task) => {
  const resp = await axios.post("http://localhost:3333/task/type", task);
  return resp.data;
};

const getAllTask = async () => {
  try {
    const resp = await axios.get("http://localhost:3333/task/type");
    return resp.data;
  } catch (ex) {
    return [];
  }
};

const deleteTask = async (id) => {
  const resp = await axios.delete("http://localhost:3333/task/type/" + id);
  return resp.status == 200;
};

export { updateTask, createNewTask, deleteTask, getAllTask };
