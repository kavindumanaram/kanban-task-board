import { useDraggable } from "@dnd-kit/core";
import { KanbanTask, KanbanTaskStatus } from "../types/task";
import TaskCard from "./TaskCard";

interface Props {
  id: KanbanTaskStatus;
  title: string;
  kanbanTasks: KanbanTask[];
}

const Column: React.FC<Props> = ({ id, title, kanbanTasks }) => {
  const { setNodeRef } = useDraggable({ id });

  const filtered = kanbanTasks.filter(
    (t: { status: KanbanTaskStatus }) => t.status === id
  );
  return (
    <div
      ref={setNodeRef}
      style={{
        flex: 1,
        minHeight: "200px",
        border: "2px solid #ccc",
      }}
    >
      <h2>{title}</h2>
      {filtered.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
