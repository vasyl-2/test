import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<{ prop: number }> {
    const prom: Promise<{ prop: number }> = new Promise((res) => {
      setTimeout(() => res({ prop: 55 }), 0);
    });
    return await prom;
  }
}
