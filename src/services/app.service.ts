import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API Restful - Aplicação Simplês com HelloWord!';
  }
}
