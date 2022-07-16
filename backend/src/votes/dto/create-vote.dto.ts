import { IsIn, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateVote {
  @IsNotEmpty()
  @IsUUID()
  comment_id: string;

  @IsNotEmpty()
  @IsIn(['like', 'dislike'])
  type: 'like' | 'dislike';
}
