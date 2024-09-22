import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from '@repo/common-types';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH') private readonly authClient: ClientProxy,
    @Inject('DIRECTORY') private readonly directoryClient: ClientProxy,
  ) { }

  getHello(): string {
    return 'Hello World!';
  }
  getHouses(): any {
    return this.directoryClient.send({ cmd: 'get_houses' }, {}); //2nd argument is empty payload
  }
  createUser(createUserRequest: CreateUserRequest) {
    this.authClient.emit('user_create', createUserRequest);
    this.directoryClient.emit('user_create', createUserRequest);
  }
}
