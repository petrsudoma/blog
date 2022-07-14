import { Injectable } from '@nestjs/common';
import { articles, Prisma } from '@prisma/client';

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
      include: { comments: true },
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
      data: article,
    });
  }

  async deleteArticle(id: string) {
    return await this.prisma.articles.delete({ where: { id: id } });
  }
}
