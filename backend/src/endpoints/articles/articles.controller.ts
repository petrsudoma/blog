import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { articles } from '@prisma/client';

import { CreateArticle, UpdateArticle } from './dto';
import { ArticlesService } from './articles.service';
import { JwtGuard } from 'src/endpoints/auth/guard/jwt.guard';
import { JwtService } from '@nestjs/jwt';

type ArticleId = {
  id: string;
};

@Controller('articles')
export class ArticlesController {
  constructor(
    private service: ArticlesService,
    private jwtService: JwtService,
  ) {}

  @Get()
  getArticles(): Promise<articles[]> {
    return this.service.getArticles();
  }

  @Get(':id')
  getArticle(@Param() params: ArticleId): Promise<articles> {
    return this.service.getArticle(params.id);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  updateArticle(
    @Param() params: ArticleId,
    @Body() body: UpdateArticle,
  ): Promise<articles> {
    return this.service.updateArticle(params.id, body);
  }

  @Post()
  @UseGuards(JwtGuard)
  createArticle(
    @Body() body: CreateArticle,
    @Headers() headers,
  ): Promise<articles> {
    const decodedToken = this.jwtService.decode(
      headers.authorization.split(' ')[1],
    );

    return this.service.createArticle(body, decodedToken.sub);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  deleteArticle(@Param() params: ArticleId): Promise<articles> {
    return this.service.deleteArticle(params.id);
  }
}
