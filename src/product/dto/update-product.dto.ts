import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiProperty()
  @Optional()
  name: string;
  @ApiProperty()
  @Optional()
  description: string;
  @ApiProperty()
  @Optional()
  price: number;
  @ApiProperty()
  @Optional()
  stock: number;
  @ApiProperty()
  @Optional()
  categoryId: number;
  @Optional()
  @ApiProperty()
  imageUrl: string;
}
