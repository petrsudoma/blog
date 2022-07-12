import { IsOptional, IsUUID, Length, MinLength } from 'class-validator';

export class UpdateArticle {
  @IsOptional()
  @Length(5, 50)
  title?: string;

  @IsOptional()
  @Length(10, 300)
  perex?: string;

  @IsOptional()
  @MinLength(10)
  content?: string;

  @IsOptional()
  @IsUUID()
  image_id?: string;
}
