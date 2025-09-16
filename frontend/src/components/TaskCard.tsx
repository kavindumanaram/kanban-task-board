import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { KanbanTask } from "../types/task";

const TaskCard: React.FC<{ task: KanbanTask }> = ({ task }) => {
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

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <strong>{task.title}</strong>
      <p>{task.description}</p>
      <small>{task.status}</small>
    </div>
  );
};

export default TaskCard;
