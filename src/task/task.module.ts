import { Module } from '@nestjs/common';

import { TaskService } from './task.service';
import { TasksController } from './task.controller';
import { DbConnectionService } from "../services/db-connection.service";
import { DbConnectorService } from "../services/db-connector.service";

@Module({
  providers: [TaskService, DbConnectionService, DbConnectorService],
  controllers: [TasksController]
})
export class TaskModule {
}
