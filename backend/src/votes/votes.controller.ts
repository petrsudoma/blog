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

import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { CreateVote } from './dto';
import { VotesService } from './votes.service';

type CommentId = {
  id: string;
};

@Controller('votes')
export class VotesController {
  constructor(
    private votesService: VotesService,
    private jwtService: JwtService,
  ) {}

  @Get(':id')
  getVotes(@Param() params: CommentId) {
    return this.votesService.getVotes(params.id);
  }

  @Post()
  @UseGuards(JwtGuard)
  createVote(@Body() body: CreateVote, @Headers() headers) {
    const decodedToken = this.jwtService.decode(
      headers.authorization.split(' ')[1],
    );

    return this.votesService.createVote(body, decodedToken.sub);
  }
}
