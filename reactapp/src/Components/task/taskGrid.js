import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "./context";
import TaskRow from "./taskRow";
import { getAllTask } from "../../services/taskService";
import { TaskTypeAction } from "../../models/actionType";
import MessageBox from "../common/message";

const TaskGrid = () => {
  const { taskState, dispatch } = useContext(TaskContext);
  const { tasks, msg } = taskState;

  useEffect(() => {
    const cb = async () => {
      const tasks = await getAllTask();
      dispatch({ type: TaskTypeAction.Load_Tasks, data: tasks });
    };
    cb();
  }, []);

  return (
    <>
      {!!msg && (
        <MessageBox
          msg={msg}
          onClose={() => {
            dispatch({ type: TaskTypeAction.Set_Msg, data: "" });
          }}
        ></MessageBox>
      )}
      <h3>Tasks</h3>
      <table className="table table-info table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Color</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return <TaskRow key={task._id} task={task} isEditRow={false} />;
          })}
          <TaskRow
            isEmptyRow={true}
            isEditRow={true}
            task={{}}
            dispatch={dispatch}
          />
        </tbody>
      </table>
    </>
  );
};

export default TaskGrid;
