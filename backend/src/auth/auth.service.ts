import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { v4 as uuid } from 'uuid';
import { PrismaService } from 'src/prisma.service';

import { User } from './dto';
import { JwtService } from '@nestjs/jwt';
import { AccessToken } from './types';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signToken(id: string, username: string): Promise<AccessToken> {
    const token = await this.jwtService.signAsync(
      { sub: id, username },
      { secret: process.env.JWT_SECRET, expiresIn: '60m' },
    );

    return { access_token: token };
  }

  async signup(data: User): Promise<AccessToken> {
    const hash = await argon.hash(data.password);

    try {
      const user = await this.prisma.users.create({
        data: {
          id: uuid(),
          username: data.username,
          password: hash,
        },
      });

      return this.signToken(user.id, user.username);
    } catch (err) {
      if (err.code === 'P2002') {
        throw new ForbiddenException('Username already exists');
      }
      throw err;
    }
  }

  async signin(data: User): Promise<AccessToken> {
    const user = await this.prisma.users.findFirst({
      where: { username: data.username },
    });
    if (!user) throw new ForbiddenException('Invalid credentials');

    const pwMatches = await argon.verify(user.password, data.password);
    if (!pwMatches) throw new ForbiddenException('Invalid credentials');

    return this.signToken(user.id, user.username);
  }
}
