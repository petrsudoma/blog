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

  getArticle(id: string): Promise<articles> {
    return this.repository.getArticle(id);
  }

  async updateArticle(id: string, body: UpdateArticle): Promise<articles> {
    const article = await this.repository.getArticle(id);
    const newDate = new Date();
    const newArticle = { ...article, ...body, updatedAt: newDate };

    return this.repository.updateArticle(newArticle);
  }

  createArticle(data: CreateArticle): Promise<articles> {
    const newArticle: Prisma.articlesCreateInput = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return this.repository.createArticle(newArticle);
  }

  deleteArticle(id: string) {
    return this.repository.deleteArticle(id);
  }
}
