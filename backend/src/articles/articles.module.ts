import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ArticlesController } from './articles.controller';
import { ArticlesRepository } from './articles.repository';
import { ArticlesService } from './articles.service';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, ArticlesRepository, PrismaService],
})
export class ArticlesModule {}
