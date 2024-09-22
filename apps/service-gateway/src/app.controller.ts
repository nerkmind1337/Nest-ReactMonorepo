import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequest } from '@repo/common-types';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/getHouses')
  getHouses() {
    return this.appService.getHouses();
  }

  @Post('/createUser')
  createUser(@Body() createUserRequest: CreateUserRequest): Boolean {
    this.appService.createUser(createUserRequest);
    return true;
  }
}
