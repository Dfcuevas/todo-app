import React from "react";
import TaskRow from "./TaskRow";

function TaskTable({ tasksItems, toggleTask, showCompleted = false }) {
  const taskTableRows = (showCompleted) => {
    return tasksItems
      .filter((task) => task.done === showCompleted)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
}

export default TaskTable;
