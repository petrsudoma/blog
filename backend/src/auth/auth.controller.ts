import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

import { User } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() data: User) {
    return this.authService.signup(data);
  }

  @Post('signin')
  @HttpCode(200)
  signin(@Body() data: User) {
    return this.authService.signin(data);
  }
}
