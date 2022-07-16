import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CommentsRepository } from './comments.repository';
import { CreateComment } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private repository: CommentsRepository) {}

  createComment(data: CreateComment) {
    return this.repository.createComment({ ...data, id: uuid() });
  }
}
