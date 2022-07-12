import { IsNotEmpty, IsUUID, Length, MinLength } from 'class-validator';

export class CreateArticle {
  @IsNotEmpty()
  @Length(5, 50)
  title: string;

  @IsNotEmpty()
  @Length(10, 300)
  perex: string;

  @IsNotEmpty()
  @MinLength(10)
  content: string;

  @IsNotEmpty()
  @IsUUID()
  image_id: string;
}
