import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateVote } from './dto';

@Injectable()
export class VotesRepository {
  constructor(private prisma: PrismaService) {}

  getVotes(commentId: string) {
    return this.prisma.votes.findMany({ where: { comment_id: commentId } });
  }

  async createVote(data: CreateVote, userId: string) {
    const existingVote = await this.prisma.votes.findFirst({
      where: { user_id: userId, comment_id: data.comment_id },
    });

    if (!existingVote) {
      return this.prisma.votes.create({ data: { ...data, user_id: userId } });
    }

    if (data.type === existingVote.type) {
      throw new BadRequestException();
    }

    await this.prisma.votes.delete({ where: { id: existingVote.id } });
    return this.prisma.votes.create({ data: { ...data, user_id: userId } });
  }
}
