import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async getUser(id: string) {
    const user = await this.prisma.users.findUnique({ where: { id: id } });
    delete user.password;
    return user;
  }
}
