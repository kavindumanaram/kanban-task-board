import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { KanbanTask } from "../types/task";
import { deleteTasks, updateTasks } from "../api/taskApi";

interface Props {
  task: KanbanTask;
  onDelete: (id: number) => void;
  onEdit?: (task: KanbanTask) => void;
}

const TaskCard: React.FC<Props> = ({ task, onDelete, onEdit }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id.toString(),
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    border: "1px solid black",
    padding: "8px",
    margin: "5px 0",
    borderRadius: "4px",
    background: "white",
    cursor: "grab",
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${task.title}"?`
    );
    if (confirmed) {
      deleteTasks(task.id).then(() => onDelete(task.id));
    }
  };

  const handleEdit = () => {
    console.log(99);
    if (onEdit) {
      console.log(100);
      onEdit(task);
    } else {
      console.log(101);
      alert(`Edit "${task.title}" clicked (to be implemented)`);
    }
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <strong>{task.title}</strong>
      <p>{task.description}</p>
      <small>{task.status}</small>
      <br />
      <button
        onClick={handleEdit}
        style={{ marginRight: "8px" }}
        onMouseDown={(e) => e.stopPropagation()} // stop drag start
        onPointerDown={(e) => e.stopPropagation()} // prevent drag on button
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        style={{ color: "red" }}
        onMouseDown={(e) => e.stopPropagation()} // stop drag start
        onPointerDown={(e) => e.stopPropagation()} // prevent drag on button
      >
        Delete
      </button>{" "}
    </div>
  );
};

export default TaskCard;
