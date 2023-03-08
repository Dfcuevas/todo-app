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
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
}

export default TaskTable;
