import { CreateArticleDto } from './dto/create-article.dto';
import { Controller, Post, Get } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async createArticle(createArticleDto: CreateArticleDto) {
    return await this.articleService.createArticle(createArticleDto);
  }

  @Get()
  async getAllArticle() {
    return await this.articleService.getAllArticle();
  }
}
