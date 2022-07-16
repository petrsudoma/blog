import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

import { CommentsController } from './comments.controller';
import { CommentsRepository } from './comments.repository';
import { CommentsService } from './comments.service';

@Module({
  imports: [JwtModule],
  controllers: [CommentsController],
  providers: [CommentsService, CommentsRepository, PrismaService],
})
export class CommentsModule {}
