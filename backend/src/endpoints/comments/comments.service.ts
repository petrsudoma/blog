import { Injectable } from '@nestjs/common';
import { comments } from '@prisma/client';
import { v4 as uuid } from 'uuid';

import { CommentsRepository } from './comments.repository';
import { CreateComment } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private repository: CommentsRepository) {}

  getComments(articleId: string): Promise<comments[]> {
    return this.repository.getComments(articleId);
  }

  createComment(data: CreateComment): Promise<comments> {
    return this.repository.createComment({ ...data, id: uuid() });
  }
}
