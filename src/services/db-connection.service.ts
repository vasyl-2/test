import { Injectable } from "@nestjs/common";
import { Pool, PoolClient } from 'pg';

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

    const pgClient = await this.getClient();

    let resp;

    try {
      await pgClient.query('BEGIN');
      const getResp = await this.pool.query('SELECT id from public.task_queue  for update skip locked limit 1');
      console.log('GET_RESP_____', getResp);
      resp = await this.pool.query(sql, values);
      await pgClient.query('COMMIT');
    } catch (err) {
      console.log('ERROR_OCCURED________', err);
      await pgClient.query('ROLLBACK');
      throw err;
    }

    return resp;
  }
}
