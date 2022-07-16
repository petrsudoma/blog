import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from 'src/prisma.service';
import { VotesController } from './votes.controller';
import { VotesRepository } from './votes.repository';
import { VotesService } from './votes.service';

@Module({
  controllers: [VotesController],
  providers: [VotesService, PrismaService, VotesRepository, JwtService],
})
export class VotesModule {}
