import { Injectable } from "@nestjs/common";
import { IDbConnector } from "../models/i-db-connector";
import { DbConnectionService } from "./db-connection.service";
import { PoolClient } from 'pg';

@Injectable()
export class DbConnectorService implements IDbConnector {

  public dbClient: PoolClient
  constructor(
    private db: DbConnectionService
  ) {

  }

  getDB(): PoolClient {
    return this.dbClient;
  }

  async setDB(): Promise<void> {
    this.dbClient = await this.db.getClient();
  }

  async runQuery<T extends number, R extends number>(sql: string, values?: T extends number ? number[] : never ): Promise<R>  {
    return await this.db.runQuery<T, R>(sql, values);
  }
}
