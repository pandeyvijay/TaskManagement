import { useReducer } from "react";
import { TaskTypeAction } from "../../models/actionType";

const useTaskReducer = (initialValue) => {
  const taskReducer = (oldState, action) => {
    switch (action.type) {
      case TaskTypeAction.Create_Task:
        return {
          ...oldState,
          tasks: [...oldState.tasks, action.data],
        };
      case TaskTypeAction.Load_Tasks:
        return {
          ...oldState,
          tasks: action.data,
        };
      case TaskTypeAction.Delete_Task:
        return {
          ...oldState,
          tasks: oldState.tasks.filter((t) => t._id != action.data),
        };
      case TaskTypeAction.Set_Msg:
        return {
          ...oldState,
          msg: action.data,
        };

      default:
        return oldState;
    }
  };

  const [taskState, dispatch] = useReducer(taskReducer, initialValue);
  return [taskState, dispatch];
};

export default useTaskReducer;
