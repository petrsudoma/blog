import { Module } from '@nestjs/common';

import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
import { ImagesModule } from './images/images.module';
import { UsersModule } from './users/users.module';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [
    ArticlesModule,
    ImagesModule,
    AuthModule,
    UsersModule,
    CommentsModule,
    VotesModule,
  ],
})
export class AppModule {}
