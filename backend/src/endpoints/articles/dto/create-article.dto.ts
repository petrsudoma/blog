import {
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
  MinLength,
} from 'class-validator';

export class CreateArticle {
  @IsNotEmpty()
  @Length(5, 50)
  @IsString()
  title: string;

  @IsNotEmpty()
  @Length(10, 300)
  @IsString()
  perex: string;

  @IsNotEmpty()
  @MinLength(10)
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsUUID()
  image_id: string;
}
