import React, { useState, useEffect } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    } else {
      alert("La tarea ya existe!");
    }
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleleTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done)); // esto dice, de cada objeto tarea (task) filtre aquellas que no estan hechas, en otras palabas, las tareas completadas van a desaparecer del arreglo
    setShowCompleted(false);
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <div>
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable toggleTask={toggleTask} tasksItems={tasksItems} />

      <VisibilityControl
        isChecked={showCompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)}
        deleleTasks={deleleTasks}
      />
      {showCompleted && (
        <TaskTable
          toggleTask={toggleTask}
          tasksItems={tasksItems}
          showCompleted={showCompleted}
        />
      )}
    </div>
  );
}

export default App;
