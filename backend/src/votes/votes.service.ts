import { Injectable } from '@nestjs/common';

import { CreateVote } from './dto';
import { VotesRepository } from './votes.repository';

@Injectable()
export class VotesService {
  constructor(private repository: VotesRepository) {}

  getVotes(commentId: string) {
    return this.repository.getVotes(commentId);
  }

  createVote(data: CreateVote, userId: string) {
    return this.repository.createVote(data, userId);
  }
}
