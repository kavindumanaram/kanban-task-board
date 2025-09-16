import React, { useState } from "react";

interface TaskFormProps {
  initialTitle?: string;
  initialDescription?: string;
  onSubmit: (title: string, description: string) => void;
  onCancel: () => void;
  submitLabel: string;
}

const TaskForm: React.FC<TaskFormProps> = ({
  initialTitle = "",
  initialDescription = "",
  onSubmit,
  onCancel,
  submitLabel,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title, description);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="task-form"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "12px",
      }}
    >
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button type="submit">{submitLabel}</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default TaskForm;
