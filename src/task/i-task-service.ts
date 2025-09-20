import { Task } from "../models/task";

export interface ITaskService {
  getTasks(): Promise<Task[]>;
  updateTask(id: string): Promise<number>;
  createTask(): Promise<Task>;
  deleteTask(id: number): Promise<number>;
}
