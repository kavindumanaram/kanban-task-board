import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createTasks, getAllTasks } from "./api/taskApi";
import { KanbanTask } from "./types/task";
import KanbanBoard from "./components/KanbanBoard";
import TaskForm from "./components/shared/TaskForm";
import TaskModal from "./components/shared/TaskModal";

function App() {
  const [kanbanTasks, setKanbanTasks] = useState<KanbanTask[]>([]);

  const [showCreate, setShowCreate] = useState(false);

  const handleCreate = async (title: string, description: string) => {
    const newTask = await createTasks({ title, description }); // your backend API
    setKanbanTasks((prev) => [...prev, newTask]);
    setShowCreate(false);
  };

  useEffect(() => {
    (async () => {
      const data = await getAllTasks();
      setKanbanTasks(data);
    })();
  }, []);

  const addTask = async () => {
    const newTask = await createTasks({ title: "new task from UI" });
    setKanbanTasks((prev) => [...prev, newTask]);
  };

  return (
    <div className="App">
      <h1>Kanban Board</h1>

      <button onClick={() => setShowCreate(true)}> Add Task</button>
      <br />
      <br />

      <TaskModal
        open={showCreate}
        title="Create Task"
        onClose={() => setShowCreate(false)}
      >
        <TaskForm
          submitLabel="Create"
          onSubmit={(title, description) => {
            createTasks({ title, description }).then((newTask) =>
              setKanbanTasks((prev) => [...prev, newTask])
            );
            setShowCreate(false);
          }}
          onCancel={() => setShowCreate(false)}
        />
      </TaskModal>

      <KanbanBoard tasks={kanbanTasks} setTasks={setKanbanTasks} />
    </div>
  );
}

export default App;
