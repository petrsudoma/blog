import { Injectable } from '@nestjs/common';
import { articles, Prisma } from '@prisma/client';
import { ArticlesRepository } from './articles.repository';
import { CreateArticle, UpdateArticle } from './dto';

@Injectable()
export class ArticlesService {
  constructor(private repository: ArticlesRepository) {}

  async getArticles(): Promise<articles[]> {
    const articles = await this.repository.getArticles();

    for (const article of articles) {
      delete article.content;
    }

    return articles;
  }

  getUserArticles(userId: string): Promise<articles[]> {
    return this.repository.getUserArticles(userId);
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
      created_at: new Date(),
      updated_at: new Date(),
    };

    return this.repository.createArticle(newArticle, userId);
  }

  deleteArticle(articleId: string, userId: string): Promise<articles> {
    return this.repository.deleteArticle(articleId, userId);
  }
}
