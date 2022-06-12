import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async create(): Promise<any> {
    return 'Hello World!';
  }
}
