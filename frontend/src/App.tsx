import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getAllTasks } from "./api/taskApi";
import { KanbanTask } from "./types/task";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  const [kanbanTasks, setKanbanTasks] = useState<KanbanTask[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getAllTasks();
      setKanbanTasks(data);
    })();
  }, []);
  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <KanbanBoard tasks={kanbanTasks} setTasks={setKanbanTasks} />
    </div>
  );
}

export default App;
