import React, { useState, useEffect } from "react";

import "./App.css";

import { Taskform } from "./components/Taskform";
import Taskcoloumn from "./components/Taskcoloumn";
import Todo from "./assets/direct-hit.png";
import doingicon from "./assets/glowing-star.png";
import doneicon from "./assets/check-mark-button.png";
const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  console.log("tasks", tasks);
  const handleDelete = (newindex) => {
    const newtask = tasks.filter((task, index) => newindex !== index);
    setTasks(newtask);
  };

  return (
    <div className="App">
      <Taskform setTasks={setTasks} tasks={tasks} />

      <main className="app_main">
        <Taskcoloumn
          title="TO DO"
          icon={Todo}
          tasks={tasks}
          status="TO DO"
          handleDelete={handleDelete}
        />
        <Taskcoloumn
          title="DOING"
          icon={doingicon}
          tasks={tasks}
          status="DOING"
          handleDelete={handleDelete}
        />
        <Taskcoloumn
          title="DONE"
          icon={doneicon}
          tasks={tasks}
          status="DONE"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
