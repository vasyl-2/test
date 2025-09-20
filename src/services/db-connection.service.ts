import { Injectable } from "@nestjs/common";
import { Pool, PoolClient, QueryResult } from 'pg';

@Injectable()
export class DbConnectionService {
  private pool: Pool;

  constructor(

  ) {
    this.pool = new Pool({
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      user: process.env.DB_USER || 'postgres',
      // password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'tasks',
    });
  }

  async getClient(): Promise<PoolClient> {
    return this.pool.connect();
  }

  async runQuery<T extends number, R extends number>(sql: string, values?: T extends number ? number[] : never): Promise<R>  {
    return await this.pool.query(sql, values);
  }
}
