import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { CommentsController } from './comments.controller';
import { CommentsRepository } from './comments.repository';
import { CommentsService } from './comments.service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService, CommentsRepository, PrismaService],
})
export class CommentsModule {}
