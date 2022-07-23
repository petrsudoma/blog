import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { articles, Prisma } from '@prisma/client';
import { v4 as uuid } from 'uuid';
import { ArticlesRepository } from './articles.repository';
import { CreateArticle, UpdateArticle } from './dto';

@Injectable()
export class ArticlesService {
  constructor(
    private repository: ArticlesRepository,
    private jwtService: JwtService,
  ) {}

  async getArticles(): Promise<articles[]> {
    const articles = await this.repository.getArticles();

    for (const article of articles) {
      delete article.content;
    }

    return articles;
  }

  getArticle(id: string): Promise<articles> {
    return this.repository.getArticle(id, true);
  }

  async updateArticle(id: string, body: UpdateArticle): Promise<articles> {
    const article = await this.repository.getArticle(id, false);
    const newDate = new Date();
    const newArticle = { ...article, ...body, updated_at: newDate };

    return this.repository.updateArticle(newArticle);
  }

  createArticle(data: CreateArticle, userId: string): Promise<articles> {
    const newArticle: Prisma.articlesCreateInput = {
      ...data,
      id: uuid(),
      created_at: new Date(),
      updated_at: new Date(),
    };

    return this.repository.createArticle(newArticle, userId);
  }

  deleteArticle(id: string): Promise<articles> {
    return this.repository.deleteArticle(id);
  }
}
