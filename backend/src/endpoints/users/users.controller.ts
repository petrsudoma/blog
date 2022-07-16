import { Controller, Get, Param } from '@nestjs/common';

import { UsersService } from './users.service';

type UserId = {
  id: string;
};

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get(':id')
  getUser(@Param() params: UserId) {
    return this.service.getUser(params.id);
  }
}
