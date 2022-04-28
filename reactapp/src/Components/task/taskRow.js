import React, { useState, useContext } from "react";
import { BiPen, BiRecycle, BiSave } from "react-icons/bi";
import {
  createNewTask,
  deleteTask,
  updateTask,
} from "../../services/taskService";
import { TaskContext } from "./context";
import { TaskTypeAction } from "../../models/actionType";

const TaskRow = ({ isEditRow, task, isEmptyRow = false }) => {
  const { dispatch } = useContext(TaskContext);
  const [editMode, setEditMode] = useState(isEditRow);
  const [name, setName] = useState(task.name || "");
  const [color, setColor] = useState(task.color || "");

  const onSave = async (ev) => {
    if (isEmptyRow) {
      const task = await createNewTask({
        name,
        color,
      });
      dispatch({ type: TaskTypeAction.Create_Task, data: task });
      setName("");
      setColor("");
    } else {
      const uTask = await updateTask({ ...task, name, color });
      setEditMode(false);
    }
  };

  const onDelete = async (id, ev) => {
    const data = await deleteTask(id);
    if (data) {
      dispatch({ type: TaskTypeAction.Delete_Task, data: id });
      dispatch({ type: TaskTypeAction.Set_Msg, data: "Delete completed" });
    } else {
      dispatch({ type: TaskTypeAction.Set_Msg, data: "Delete Failed" });
    }
  };

  const onEdit = (ev) => {
    setEditMode((oEM) => {
      return !oEM;
    });
  };

  const handleOnChange = (ev) => {
    const { name, value } = ev.target;
    if (name === "name") setName(value);
    if (name === "color") setColor(value);
  };

  return (
    <tr>
      <th scope="row"></th>
      <td>
        {editMode ? (
          <input
            name="name"
            placeholder="Task name"
            type="text"
            value={name}
            onChange={handleOnChange}
          ></input>
        ) : (
          name
        )}
      </td>
      <td>
        {editMode ? (
          <input
            name="color"
            value={color}
            style={{ width: "100px" }}
            placeholder="color hex code"
            type="text"
            onChange={handleOnChange}
          ></input>
        ) : (
          <div style={{ backgroundColor: color }}>{color}</div>
        )}
      </td>
      <td>
        <button onClick={onSave}>
          <BiSave />
        </button>
        {!isEditRow && (
          <button>
            <BiPen onClick={onEdit} />
          </button>
        )}
        {!isEditRow && (
          <button onClick={onDelete.bind(null, task._id)}>
            <BiRecycle />
          </button>
        )}
      </td>
    </tr>
  );
};

export default TaskRow;
