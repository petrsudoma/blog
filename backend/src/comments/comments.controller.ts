import { Body, Controller, Headers, Post, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { CommentsService } from './comments.service';
import { CreateComment } from './dto/create-comment.dto';
@Controller('comments')
export class CommentsController {
  constructor(
    private commentsService: CommentsService,
    private jwtService: JwtService,
  ) {}

  @Post()
  @UseGuards(JwtGuard)
  createComment(@Body() body: CreateComment, @Headers() headers) {
    const decodedToken = this.jwtService.decode(
      headers.authorization.split(' ')[1],
    );
    const data = { ...body, user_id: decodedToken.sub };

    return this.commentsService.createComment(data);
  }
}
