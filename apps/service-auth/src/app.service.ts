import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from '@repo/common-types';
@Injectable()
export class AppService {
  private users: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }
  handleUserCreated(data: CreateUserEvent) {
    console.log('recieved create user event from gateway, pushing ', data, 'to in memory DB');
    this.users.push(data);
  }
}
