import { useDroppable } from "@dnd-kit/core";
import { KanbanTask, KanbanTaskStatus } from "../types/task";
import TaskCard from "./TaskCard";

interface Props {
  id: KanbanTaskStatus;
  title: string;
  kanbanTasks: KanbanTask[];
  setTasks: React.Dispatch<React.SetStateAction<KanbanTask[]>>;
  onEdit: (task: KanbanTask) => void;
}

const Column: React.FC<Props> = ({
  id,
  title,
  kanbanTasks,
  setTasks,
  onEdit,
}) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  const filtered = kanbanTasks.filter((t) => t.status === id);

  return (
    <div
      ref={setNodeRef}
      style={{
        flex: 1,
        minHeight: "200px",
        border: "2px solid #ccc",
        borderRadius: "6px",
        padding: "10px",
        background: isOver ? "#e0f7fa" : "#f9f9f9",
        transition: "background 0.2s ease",
      }}
    >
      <h2>{title}</h2>
      {filtered.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={(id) => setTasks((prev) => prev.filter((t) => t.id !== id))}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default Column;
