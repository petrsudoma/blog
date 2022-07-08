import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { articles } from '@prisma/client';

import { CreateArticle, UpdateArticle } from './dto';
import { ArticlesService } from './articles.service';

type ArticleId = {
  id: string;
};

@Controller('articles')
export class ArticlesController {
  constructor(private service: ArticlesService) {}

  @Get()
  getArticles(): Promise<articles[]> {
    return this.service.getArticles();
  }

  @Get(':id')
  getArticle(@Param() params: ArticleId): Promise<articles> {
    return this.service.getArticle(params.id);
  }

  @Patch(':id')
  updateArticle(
    @Param() params: ArticleId,
    @Body() body: UpdateArticle,
  ): Promise<articles> {
    return this.service.updateArticle(params.id, body);
  }

  @Post()
  createArticle(@Body() body: CreateArticle): Promise<articles> {
    return this.service.createArticle(body);
  }

  @Delete(':id')
  deleteArticle(@Param() params: ArticleId) {
    return this.service.deleteArticle(params.id);
  }
}
