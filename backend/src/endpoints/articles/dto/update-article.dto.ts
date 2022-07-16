import {
  IsOptional,
  IsString,
  IsUUID,
  Length,
  MinLength,
} from 'class-validator';

export class UpdateArticle {
  @IsOptional()
  @Length(5, 50)
  @IsString()
  title?: string;

  @IsOptional()
  @Length(10, 300)
  @IsString()
  perex?: string;

  @IsOptional()
  @MinLength(10)
  @IsString()
  content?: string;

  @IsOptional()
  @IsUUID()
  image_id?: string;
}
