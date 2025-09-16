import { KanbanTask } from "../types/task";
import axios from "axios";

const API_URL = "https://localhost:7166/api/Task";

export const getAllTasks = async (): Promise<KanbanTask[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createTasks = async (
  task: Partial<KanbanTask>
): Promise<KanbanTask[]> => {
  const res = await axios.put(`${API_URL}`);
  return res.data;
};

export const updateTasks = async (
  id: number,
  task: Partial<KanbanTask>
): Promise<KanbanTask[]> => {
  const res = await axios.put(`${API_URL}/${id}`);
  return res.data;
};

export const deleteTasks = async (id: number): Promise<KanbanTask[]> => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
