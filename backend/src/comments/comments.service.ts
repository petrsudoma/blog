import { Injectable } from '@nestjs/common';
import { CommentsRepository } from './comments.repository';

@Injectable()
export class CommentsService {
  constructor(private repository: CommentsRepository) {}

  upvoteComment(id: string) {
    return this.repository.upvoteComment(id);
  }

  downvoteComment(id: string) {
    return this.repository.downvoteComment(id);
  }
}
