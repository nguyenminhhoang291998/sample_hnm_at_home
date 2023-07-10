import { Controller, Get, Query } from '@nestjs/common';
import { User } from 'src/app/domain/user.entity';

@Controller('users')
export class UsersController {

  constructor(
    // private readonly userService: UserService,
  ) { }
  @Get()
  getHello(): string {
    return 'List user';
  }

  // @Get()
  // async getListUser(@Query('name') name = ''): Promise<User[]> {
  //   return await this.userService.getAllUser(name);
  // }
}
