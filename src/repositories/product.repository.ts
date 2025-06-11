import { Injectable } from '@nestjs/common';
import { PrismaClient, Product } from '@prisma/client';
import { CreateProductDto } from '../product/dto/create-product.dto';
import { UpdateProductDto } from '../product/dto/update-product.dto';

const prisma = new PrismaClient();
@Injectable()
export class ProductRepository {
  constructor() {}

  async findAll(): Promise<Product[]> {
    return prisma.product.findMany();
  }

  async findById(id: number): Promise<Product | null> {
    return prisma.product.findUnique({
      where: { id },
    });
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return prisma.product.create({
      data: {
        name: createProductDto.name,
        price: createProductDto.price,
        description: createProductDto.description,
        image: createProductDto.imageUrl,
      },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return prisma.product.update({
      where: { id },
      data: {
        name: updateProductDto?.name,
        price: updateProductDto?.price,
        description: updateProductDto?.description,
        image: updateProductDto?.imageUrl,
      },
    });
  }

  async remove(id: number): Promise<Product> {
    return prisma.product.delete({ where: { id: Number(id) } });
  }
}
