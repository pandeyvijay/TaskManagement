import React from "react";
import useTaskReducer from "./taskReducer";
export const TaskContext = React.createContext();

export const TaskStore = (props) => {
  const [taskState, dispatch] = useTaskReducer({
    tasks: [],
    currentTask: {},
    editTaskId: "",
    msg: "",
  });
  return (
    <TaskContext.Provider value={{ taskState, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
};
