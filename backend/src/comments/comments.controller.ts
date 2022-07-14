import { Controller, Param, Put } from '@nestjs/common';
import { CommentsService } from './comments.service';

type CommentType = {
  id: string;
};

@Controller('comments')
export class CommentsController {
  constructor(private service: CommentsService) {}

  @Put('upvote/:id')
  upvoteComment(@Param() params: CommentType) {
    return this.service.upvoteComment(params.id);
  }

  @Put('downvote/:id')
  downvoteComment(@Param() params: CommentType) {
    return this.service.downvoteComment(params.id);
  }
}
