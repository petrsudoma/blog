import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentsRepository {
  constructor(private prisma: PrismaService) {}

  async upvoteComment(id: string) {
    return await this.prisma.comments.update({
      where: { id: id },
      data: { likes: { increment: 1 } },
    });
  }

  async downvoteComment(id: string) {
    return await this.prisma.comments.update({
      where: { id: id },
      data: { likes: { decrement: 1 } },
    });
  }
}
