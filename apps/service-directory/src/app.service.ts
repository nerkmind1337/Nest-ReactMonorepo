import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from '@repo/common-types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('create user handler called inside of directory service...being handled by auth');
  }

  getHouses() {
    return [{ name: "house 1", address: "idk i made it up road, borlänge, sweden" }]
  }
}
