import { Injectable } from '@nestjs/common';

import { ITaskService } from "./i-task-service";
import { Task } from "../models/task";
import { DbConnectorService } from "../services/db-connector.service";

@Injectable()
export class TaskService implements ITaskService {

  constructor(
    private bbConnectorService: DbConnectorService
  ) {

  }

  async createTask(): Promise<Task> {
    const e = await Promise.resolve();
    return { id: 5, task_name: '' }
  }

  async deleteTask(id: number): Promise<number> {
    return Promise.resolve(0);
  }

  async getTasks(): Promise<Task[]> {
    return Promise.resolve([]);
  }

  async updateTask(id: string): Promise<number> {
    const taskId = +id;
    const sql = "UPDATE public.task_queue set task_name = 'newtask4' WHERE id = $1";
    console.log('ID_____________', taskId);
    const updated = await this.bbConnectorService.runQuery<number, number>(sql, [taskId]);

    console.log('UPDATED____', updated);
    return updated;
  }

}
