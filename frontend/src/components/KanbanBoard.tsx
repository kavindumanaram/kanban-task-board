import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { KanbanTask, KanbanTaskStatus } from "../types/task";
import Column from "./Column";
import { createTasks, updateTasks } from "../api/taskApi";
import { useState } from "react";
import EditTaskForm from "./shared/EditTaskForm";
import TaskModal from "./shared/TaskModal";

interface Props {
  tasks: KanbanTask[];
  setTasks: React.Dispatch<React.SetStateAction<KanbanTask[]>>;
}
const KanbanBoard: React.FC<Props> = ({ tasks, setTasks }) => {
  const [editingTask, setEditingTask] = useState<KanbanTask | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = Number(active.id);
    const newStatus = over.id as KanbanTaskStatus;
    console.log("ffhfff");
    const currentTask = tasks.find((t) => t.id === taskId);
    if (!currentTask || currentTask.status === newStatus) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );

    try {
      updateTasks(taskId, { ...currentTask, status: newStatus, id: taskId });
      console.log({ ...currentTask, status: newStatus });
    } catch (err) {
      console.error("Failed to update task:", err);

      setTasks((prev) =>
        prev.map((task) =>
          task.id === taskId ? { ...task, status: currentTask.status } : task
        )
      );
    }
  };

  return (
    <>
      <TaskModal
        open={!!editingTask}
        title="Edit Task"
        onClose={() => setEditingTask(null)}
      >
        {editingTask && (
          <EditTaskForm
            task={editingTask}
            onSubmit={async (title, description) => {
              const updated = await updateTasks(editingTask.id, {
                id: editingTask.id,
                title,
                description,
                status: editingTask.status,
              });
              console.log(editingTask.status);
              setTasks((prev) =>
                prev.map((t) => (t.id === updated.id ? updated : t))
              );
              setEditingTask(null);
            }}
            onCancel={() => setEditingTask(null)}
          />
        )}
      </TaskModal>

      <DndContext onDragEnd={handleDragEnd}>
        <div style={{ display: "flex", gap: "20px" }}>
          <Column
            id={KanbanTaskStatus.TODO}
            title="To Do"
            kanbanTasks={tasks}
            setTasks={setTasks}
            onEdit={(task) => setEditingTask(task)}
          />
          <Column
            id={KanbanTaskStatus.INPROGRESS}
            title="In Progress"
            kanbanTasks={tasks}
            setTasks={setTasks}
            onEdit={(task) => setEditingTask(task)}
          />
          <Column
            id={KanbanTaskStatus.DONE}
            title="Done"
            kanbanTasks={tasks}
            setTasks={setTasks}
            onEdit={(task) => setEditingTask(task)}
          />
        </div>
      </DndContext>
    </>
  );
};

export default KanbanBoard;
