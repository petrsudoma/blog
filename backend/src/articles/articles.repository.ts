import { Injectable } from '@nestjs/common';
import { articles, Prisma } from '@prisma/client';

import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ArticlesRepository {
  constructor(private prisma: PrismaService) {}

  getArticles(): Promise<articles[]> {
    return this.prisma.articles.findMany();
  }

  getArticle(id: string): Promise<articles> {
    return this.prisma.articles.findUnique({
      where: { id: id },
      include: { comments: true },
    });
  }

  updateArticle(article: articles): Promise<articles> {
    return this.prisma.articles.update({
      data: article,
      where: { id: article.id },
    });
  }

  createArticle(article: Prisma.articlesCreateInput): Promise<articles> {
    return this.prisma.articles.create({
      data: article,
    });
  }

  deleteArticle(id: string) {
    return this.prisma.articles.delete({ where: { id: id } });
  }
}
