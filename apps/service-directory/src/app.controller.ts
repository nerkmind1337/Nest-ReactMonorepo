import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateUserEvent } from '@repo/common-types';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_create')
  handleUserCreated(data: CreateUserEvent) {
    console.log('a new user was created, and being handled by the auth service.');
    this.appService.handleUserCreated(data);
  }


  @MessagePattern({ cmd: 'get_houses' })
  getHouses() {
    return this.appService.getHouses();
  }

}
