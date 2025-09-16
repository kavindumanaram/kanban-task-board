import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { KanbanTask, KanbanTaskStatus } from "../types/task";
import Column from "./Column";

interface Props {
  tasks: KanbanTask[];
  setTasks: React.Dispatch<React.SetStateAction<KanbanTask[]>>;
}

const KanbanBoard: React.FC<Props> = ({ tasks, setTasks }) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = Number(active.id);
    const newStatus = over.id as KanbanTaskStatus;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", gap: "20px" }}>
        <Column id={KanbanTaskStatus.TODO} title="To Do" kanbanTasks={tasks} />
        <Column
          id={KanbanTaskStatus.INPROGRESS}
          title="In Progress"
          kanbanTasks={tasks}
        />
        <Column id={KanbanTaskStatus.DONE} title="Done" kanbanTasks={tasks} />
      </div>
    </DndContext>
  );
};

export default KanbanBoard;
