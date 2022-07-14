import { Injectable } from '@nestjs/common';

import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private repository: UsersRepository) {}

  getUser(id: string) {
    return this.repository.getUser(id);
  }
}
