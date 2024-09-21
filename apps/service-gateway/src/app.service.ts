import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from '@repo/common-types';

@Injectable()
export class AppService {
  constructor(@Inject('AUTH') private readonly authClient: ClientProxy) { }

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserRequest: CreateUserRequest) {
    this.authClient.emit('user_create', createUserRequest);
  }
}
