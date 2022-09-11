import { Injectable } from '@nestjs/common';
import { comments, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentsRepository {
  constructor(private prisma: PrismaService) {}

  getComments(articleId: string): Promise<comments[]> {
    return this.prisma.comments.findMany({ where: { article_id: articleId } });
  }

  createComment(data: Prisma.commentsCreateInput): Promise<comments> {
    return this.prisma.comments.create({ data: data });
  }
}
