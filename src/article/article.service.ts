import { CreateArticleDto } from './dto/create-article.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}

  async createArticle(articleDto: CreateArticleDto) {
    return await this.prisma.article.create({
      data: articleDto,
    });
  }

  async getAllArticle() {
    return await this.prisma.article.findMany();
  }
}
