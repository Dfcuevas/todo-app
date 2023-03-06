import React, { useState } from "react";

function TaskCreator({ createNewTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(task);
    localStorage.setItem("Task", task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button>Save Task</button>
    </form>
  );
}

export default TaskCreator;
