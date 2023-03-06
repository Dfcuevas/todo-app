import React from "react";

function TaskRow({ task, toggleTask }) {
  return (
    <tr>
      <td>
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          value={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
}

export default TaskRow;
