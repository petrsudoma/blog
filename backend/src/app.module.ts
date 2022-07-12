import { Module } from '@nestjs/common';

import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [ArticlesModule, ImagesModule, AuthModule],
})
export class AppModule {}
