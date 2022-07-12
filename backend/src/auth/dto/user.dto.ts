import { IsNotEmpty, Length } from 'class-validator';

export class User {
  @IsNotEmpty()
  @Length(5, 30)
  username: string;

  @IsNotEmpty()
  password: string;
}
