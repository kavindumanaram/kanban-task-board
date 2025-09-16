import { KanbanTask } from "../types/task";
import axios from "axios";

const API_URL = "https://localhost:7166/api/Task";

export const getAllTasks = async (): Promise<KanbanTask[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createTasks = async (
  task: Partial<KanbanTask>
): Promise<KanbanTask> => {
  const res = await axios.post<KanbanTask>(`${API_URL}`, task, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

export const updateTasks = async (
  id: number,
  updates: Partial<KanbanTask>
): Promise<KanbanTask> => {
  const res = await axios.put<KanbanTask>(`${API_URL}/${id}`, updates, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};
export const deleteTasks = async (id: number): Promise<void> => {
  const res = await axios.delete(`${API_URL}/${id}`);
};
