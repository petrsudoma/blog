import { Module } from '@nestjs/common';

import { ArticlesModule } from './endpoints/articles/articles.module';
import { AuthModule } from './endpoints/auth/auth.module';
import { CommentsModule } from './endpoints/comments/comments.module';
import { ImagesModule } from './endpoints/images/images.module';
import { UsersModule } from './endpoints/users/users.module';
import { VotesModule } from './endpoints/votes/votes.module';

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
