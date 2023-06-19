import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateArticleDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly body: string;
}
