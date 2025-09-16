export enum KanbanTaskStatus {
  TODO = "ToDo",
  INPROGRESS = "InProgress",
  DONE = "Done",
}

export interface KanbanTask {
  id: number;
  title: string;
  description?: string;
  status: KanbanTaskStatus;
  createdAt: string;
  updatedAt: string;
}
