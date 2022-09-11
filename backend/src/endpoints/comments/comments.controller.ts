import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comments } from '@prisma/client';

import { JwtGuard } from 'src/endpoints/auth/guard/jwt.guard';
import { CommentsService } from './comments.service';
import { CreateComment } from './dto/create-comment.dto';
@Controller('comments')
export class CommentsController {
  constructor(
    private commentsService: CommentsService,
    private jwtService: JwtService,
  ) {}

  @Get(':article_id')
  getComments(@Param('article_id') articleId: string): Promise<comments[]> {
    return this.commentsService.getComments(articleId);
  }

  @Post()
  @UseGuards(JwtGuard)
  createComment(
    @Body() body: CreateComment,
    @Headers() headers,
  ): Promise<comments> {
    const decodedToken = this.jwtService.decode(
      headers.authorization.split(' ')[1],
    );
    const data = { ...body, user_id: decodedToken.sub };

    return this.commentsService.createComment(data);
  }
}
