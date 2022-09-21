import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { articles, Prisma } from '@prisma/client';

import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ArticlesRepository {
  constructor(private prisma: PrismaService) {}

  getArticles(): Promise<articles[]> {
    return this.prisma.articles.findMany();
  }

  getUserArticles(userId: string): Promise<articles[]> {
    return this.prisma.articles.findMany({ where: { user_id: userId } });
  }

  async getArticle(id: string, withComments: boolean): Promise<articles> {
    const article = await this.prisma.articles.findUnique({
      where: { id: id },
      include: { comments: withComments },
    });

    if (article) return article;
    throw new NotFoundException('Invalid article ID');
  }

  updateArticle(article: articles): Promise<articles> {
    try {
      return this.prisma.articles.update({
        data: article,
        where: { id: article.id },
      });
    } catch {
      throw new NotFoundException('Invalid article ID');
    }
  }

  createArticle(
    article: Prisma.articlesCreateInput,
    userId: string,
  ): Promise<articles> {
    return this.prisma.articles.create({
      data: { ...article, users: { connect: { id: userId } } },
    });
  }

  async deleteArticle(articleId: string, userId: string): Promise<articles> {
    let articleToDelete;

    try {
      articleToDelete = await this.prisma.articles.findUnique({
        where: { id: articleId },
      });
    } catch {
      throw new NotFoundException('Invalid article ID');
    }

    if (articleToDelete.user_id === userId) {
      return this.prisma.articles.delete({ where: { id: articleId } });
    }

    throw new UnauthorizedException('Not authorized');
  }
}
