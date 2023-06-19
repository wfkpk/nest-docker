import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
