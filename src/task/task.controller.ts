import { Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ITaskService } from "./i-task-service";
import { Task } from "../models/task";
import { TaskService } from "./task.service";

@Controller('tasks')
export class TasksController implements ITaskService {

  constructor(
    private taskService: TaskService
  ) {
  }

  @Post()
  async createTask(): Promise<Task> {
    return await this.taskService.createTask();
  }

  async deleteTask(id: number): Promise<number> {
    return Promise.resolve(0);
  }

  @Get()
  async getTasks(): Promise<Task[]> {
    return [];
  }

  @Put(':id')
  async updateTask(@Param('id') id: string): Promise<number> {
    return await this.taskService.updateTask(id)
  }
}
