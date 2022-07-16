import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentsRepository {
  constructor(private prisma: PrismaService) {}

  createComment(data: Prisma.commentsCreateInput) {
    return this.prisma.comments.create({ data: data });
  }
}
