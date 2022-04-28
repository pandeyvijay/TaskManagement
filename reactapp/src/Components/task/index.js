import React from "react";
import TaskGrid from "./taskGrid";
import { TaskStore } from "./context";

export default () => {
  return (
    <TaskStore>
      <TaskGrid />
    </TaskStore>
  );
};
