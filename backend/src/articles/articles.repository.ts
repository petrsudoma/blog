import { Injectable } from '@nestjs/common';
import { articles, Prisma } from '@prisma/client';
import { v4 as uuid } from 'uuid';

import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ArticlesRepository {
  constructor(private prisma: PrismaService) {}

  async getArticles(): Promise<articles[]> {
    return await this.prisma.articles.findMany();
  }

  async getArticle(id: string): Promise<articles> {
    return await this.prisma.articles.findUnique({
      where: { id: id },
    });
  }

  async updateArticle(article: articles): Promise<articles> {
    return await this.prisma.articles.update({
      data: article,
      where: { id: article.id },
    });
  }

  async createArticle(article: Prisma.articlesCreateInput): Promise<articles> {
    return await this.prisma.articles.create({
      data: { ...article, id: uuid() },
    });
  }

  async deleteArticle(id: string) {
    return await this.prisma.articles.delete({ where: { id: id } });
  }
}
