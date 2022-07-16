import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateComment {
  @IsNotEmpty()
  @IsUUID()
  article_id: string;

  @IsNotEmpty()
  @MaxLength(600)
  @IsString()
  content: string;
}
