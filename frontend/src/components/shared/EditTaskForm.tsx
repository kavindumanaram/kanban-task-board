import React, { useState } from "react";
import { KanbanTask } from "../../types/task";

interface EditTaskFormProps {
  task: KanbanTask;
  onSubmit: (title: string, description: string) => void;
  onCancel: () => void;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({
  task,
  onSubmit,
  onCancel,
}) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title, description);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        background: "#fff",
      }}
    >
      <h3>Edit Task</h3>
      <input
        type="text"
        value={title}
        placeholder="Task title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        placeholder="Task description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <button type="submit">Update</button>
        <button type="button" onClick={onCancel} style={{ marginLeft: "8px" }}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTaskForm;
